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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      //fetchContacts
      .addCase(fetchContacts.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //addContact
      .addCase(postContact.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(postContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //deleteContactById
      .addCase(delContactById.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(delContactById.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload);
      })
      .addCase(delContactById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const {
  addContact,
  delContact,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
