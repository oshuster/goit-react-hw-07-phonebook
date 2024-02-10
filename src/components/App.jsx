import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

import { fetchContacts } from '../redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectError,
} from '../redux/contacts/contacts-selectors';

import css from './app.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactList />}
    </div>
  );
};

export default App;
