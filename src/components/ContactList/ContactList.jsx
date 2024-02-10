import { useDispatch, useSelector } from 'react-redux';
import css from './contactList.module.css';
import {
  getFilteredContacts,
  getAllContacts,
} from '../../redux/contacts/contacts-selectors';
import { delContact } from '../../redux/contacts/contactsSlice';
import { delContactById } from '../../redux/contacts/contacts-operation';

const ContactList = () => {
  const contactlist = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const deleteContact = ({ target }) => {
    const id = target.dataset.id;
    dispatch(delContactById(id));
  };

  const elements = contactlist.map(item => (
    <li key={item.id} className={css.list_item}>
      <span className={css.list_title}>
        {item.name}: {item.phone}
      </span>
      <button
        data-id={item.id}
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
