import { getContacts, addContact, delContact } from 'api/phoneBookService';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  postContactLoading,
  postContactSuccess,
  postContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} from '../../redux/contacts/contactsSlice';

export const fetchContacts = () => {
  const fn = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const response = await getContacts();
      dispatch(fetchContactsSuccess(response.data));
    } catch (error) {
      console.log(error.message);
      dispatch(fetchContactsError(error.message));
    }
  };
  return fn;
};

export const postContact = body => {
  const fn = async dispatch => {
    dispatch(postContactLoading());
    const response = await addContact(body);
    dispatch(postContactSuccess(response.data));
    try {
    } catch (error) {
      console.log(error.message);
      dispatch(postContactError(error.message));
    }
  };
  return fn;
};

export const delContactById = id => {
  const fn = async dispatch => {
    try {
      console.log('id', id);
      dispatch(deleteContactLoading());
      const response = await delContact(id);
      console.log('response', response);
      dispatch(deleteContactSuccess(response.data.id));
    } catch (error) {
      console.log(error.message);
      dispatch(deleteContactError(error.message));
    }
  };
  return fn;
};
