/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lHmx2UhvNK6tY34Detmr/books/';

// Initial State
const initialState = {
  books: [],
};

export const getBooksList = createAsyncThunk(
  FETCH_BOOKS,
  async (args, { dispatch }) => {
    const response = await fetch(api);
    const data = await response.json();
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
    dispatch({
      type: FETCH_BOOKS,
      payload: books,
    });
    return books;
  },
);

export const createNewBook = (book) => async (dispatch) => {
  try {
    await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD,
    });
    dispatch(getBooksList());
  } catch (error) {
    console.log('Book Not Added', error);
  }
};

export const removeBookList = (id) => (dispatch) => {
  fetch(`${api}${id}`, {
    method: 'DELETE',
  })
    .then(() => dispatch({
      type: REMOVE,
      payload: id,
    }))
    .then((data) => {
      console.log('Remove Book From List', data);
    });
};

// Reducer Function

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case ADD:
      return {
        ...state,
      };

    case REMOVE:
      return { books: state.books.filter((book) => book.item_id !== action.payload) };

    default:
      return state;
  }
};

export default bookReducer;
