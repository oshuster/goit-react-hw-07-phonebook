import { useState } from 'react';
import { postContact } from '../../redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/contacts-selectors';

import css from './contactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const regExpPattern = {
    name: new RegExp(
      "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    ),
    phone: new RegExp(
      '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
    ),
  };

  const saveContact = e => {
    e.preventDefault();
    // перевірка на коректність введених даних
    if (regExpPattern.name.test(name) && regExpPattern.phone.test(phone)) {
      // перевірка на наявність контакту по номеру
      if (!contacts.some(contact => contact.phone === phone)) {
        dispatch(postContact(formData));
        setFormData({
          name: '',
          phone: '',
        });
      } else {
        alert('Такий контакт вже існує');
        return;
      }
    } else {
      alert('Введені дані некоректні');
      return;
    }
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, phone } = formData;
  return (
    <form className={css.save_form} onSubmit={saveContact}>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          aria-describedby="nameHelp"
          required
          onChange={handleInput}
        />
        <div id="nameHelp" className="form-text">
          Please enter your name.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone1" className="form-label">
          Phone number
        </label>
        <input
          type="tel"
          className="form-control"
          id="exampleInputPhone1"
          name="phone"
          value={phone}
          onChange={handleInput}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
