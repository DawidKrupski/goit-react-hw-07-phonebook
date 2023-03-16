import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactAction,
  deleteContactAction,
} from './operations';

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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContactAction.pending]: handlePending,
    [addContactAction.rejected]: handleRejected,
    [addContactAction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContactAction.pending]: handlePending,
    [deleteContactAction.rejected]: handleRejected,
    [deleteContactAction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactReducer = contactsSlice.reducer;
