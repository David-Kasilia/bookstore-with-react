/* eslint-disable import/no-named-as-default */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatus from './categories/categories';

const allReducers = combineReducers({
  books: bookReducer,
  status: checkStatus,
});

const store = configureStore({ reducer: allReducers });

export default store;
