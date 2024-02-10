export const getAllContacts = store => store.contacts.items;

export const getIsLoading = store => store.contact.isLoading;

export const getError = store => store.contact.error;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
};
