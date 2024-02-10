import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContact,
  delContactById,
} from './contacts-operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      //fetchContacts
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      //addContact
      .addCase(postContact.pending, handlePending)
      .addCase(postContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(postContact.rejected, handleRejected)
      //deleteContactById
      .addCase(delContactById.pending, handlePending)
      .addCase(delContactById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(contact => contact.id !== payload);
      })
      .addCase(delContactById.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
