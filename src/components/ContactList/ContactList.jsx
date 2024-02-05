import { useDispatch, useSelector } from 'react-redux';
import css from './contactList.module.css';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { delContact } from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const contactlist = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const deleteContact = ({ target }) => {
    const id = target.dataset.id;
    dispatch(delContact(id));
  };

  const elements = contactlist.map(contact => (
    <li key={contact.id} className={css.list_item}>
      <span className={css.list_title}>
        {contact.name}: {contact.number}
      </span>
      <button
        data-id={contact.id}
        type="button"
        className={`btn btn-primary btn-sm ${css.button}`}
        onClick={deleteContact}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className="list-group">{elements}</ul>;
};

export default ContactList;
