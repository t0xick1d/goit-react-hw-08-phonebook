import { createSlice } from '@reduxjs/toolkit';
import { fetchItem, addContact, deleteContact } from './operetions';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = action.payload;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [addContact.pending]: handlePending,
    [fetchItem.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchItem.fulfilled]: handleFulfilled,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },

    [addContact.rejected]: handleRejected,
    [fetchItem.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  filterContacts,
} = contactSlice.actions;
  
export default contactSlice.reducer;
