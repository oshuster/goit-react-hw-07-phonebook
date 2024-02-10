export const getAllContacts = store => store.contacts.items;

export const getIsLoading = store => store.contacts.isLoading;

export const getError = store => store.contacts.error;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts.items;
  } else {
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
};
