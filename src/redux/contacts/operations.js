import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
//
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      Notiflix.Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contactData);

      return data;
    } catch (e) {
      Notiflix.Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      Notiflix.Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
