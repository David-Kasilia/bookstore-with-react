/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZPIIXJcS0uJKHlhqGIyi/books';

// Actions
const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

// Initial State
export const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const getBooksList = createAsyncThunk(
  'books/getBooksList',
  async () => {
    try {
      const response = await axios.get(api);
      const books = await response.data;
      return books;
    } catch (error) {
      return error.message;
    }
  },
);

export const createNewBook = createAsyncThunk(
  'books/createNewBook',
  async (initialBook) => {
    try {
      const response = await axios.post(api, initialBook);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder.addCase(getBooksList.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(getBooksList.fulfilled, (state, action) => {
      state.status = 'Success';
      state.books = action.payload;
    });
    builder.addCase(getBooksList.rejected, (state, action) => {
      state.status = 'Failed';
      state.error = action.error.message;
    });
    builder.addCase(createNewBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
  },
});

// Reducer Function

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return [
        ...state,
      ];

    case ADD:
      return [...this.state.first, action.payload];

    case REMOVE:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

// Fetch Books action From BookStore API
export const fetchBooks = () => ({
  type: 'FETCH_BOOKS',
});

// Add A Book action

export const addBook = (book) => ({
  type: 'ADD',
  payload: book,
});

// Remove a book action

export const removeBook = (index) => ({
  type: 'REMOVE',
  payload: index,
});

export const getBookStatus = (state) => state.books.status;
export const getBookError = (state) => state.books.error;

export default booksSlice.reducer;
