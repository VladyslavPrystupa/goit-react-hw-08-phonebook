import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending](state, _) {
      handlePending(state);
    },
    [addContact.pending](state, _) {
      handlePending(state);
    },
    [deleteContact.pending](state, _) {
      handlePending(state);
    },
    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [fetchContacts.rejected](state, _) {
      handleRejected(state);
    },
    [addContact.rejected](state, _) {
      handleRejected(state);
    },
    [deleteContact.rejected](state, _) {
      handleRejected(state);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
