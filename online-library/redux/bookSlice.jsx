import { createSlice } from '@reduxjs/toolkit';
import { dummyBooks } from '../data/books';

const bookSlice = createSlice({
  name: 'books',
  initialState: dummyBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;