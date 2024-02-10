import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsLoading: {
      reducer(state) {
        state.isLoading = true;
        state.error = null;
      },
    },
    fetchContactsSuccess: {
      reducer(state, { payload }) {
        state.isLoading = false;
        state.items = payload;
      },
    },
    fetchContactsError: {
      reducer(state, { payload }) {
        state.isLoading = false;
        state.error = payload;
      },
    },
    postContactLoading: {
      reducer(state) {
        state.isLoading = true;
        state.error = null;
      },
    },
    postContactSuccess: {
      reducer(state, { payload }) {
        state.isLoading = false;
        state.items.push(payload);
      },
    },
    postContactError: {
      reducer(state, { payload }) {
        state.isLoading = false;
        state.error = payload;
      },
    },
    deleteContactLoading: {
      reducer(state) {
        state.isLoading = true;
        state.error = null;
      },
    },
    deleteContactSuccess: {
      reducer(state, action) {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      },
    },
    deleteContactError: {
      reducer(state, { payload }) {
        state.isLoading = false;
        state.error = payload;
      },
    },
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    delContact: {
      reducer(state, action) {
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const {
  addContact,
  delContact,
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  postContactLoading,
  postContactSuccess,
  postContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
