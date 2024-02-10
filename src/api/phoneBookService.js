import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65c1b7e4dc74300bce8dd570.mockapi.io/contacts',
  timeout: 30000,
});

export const getContacts = () => {
  return instance.get('/');
};

export const delContact = id => {
  return instance.delete(`/${id}`);
};

export const addContact = body => {
  return instance.post('/', body);
};
