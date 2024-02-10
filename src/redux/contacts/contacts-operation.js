import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, delContact } from 'api/phoneBookService';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response.data;
    } catch (error) {
      Report.failure(
        'Whoops. Something went wrong...',
        'Try reload page',
        'Okay'
      );
      console.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const response = await addContact(body);
      return response.data;
    } catch (error) {
      Notify.failure('Whoops. Something went wrong... <br/> Try again!!!', {
        position: 'center-top',
      });
      console.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delContactById = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await delContact(id);
      Notify.success(`Delete contact: ${response.data.name}. Success!`, {
        position: 'center-top',
      });
      return response.data.id;
    } catch (error) {
      Notify.failure('Contact not found :(', { position: 'center-top' });
      console.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
