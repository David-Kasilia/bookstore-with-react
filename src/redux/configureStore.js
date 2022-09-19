import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/books';
import checkStatus from './categories/categories';

const allReducers = combineReducers({
  book: bookReducer,
  status: checkStatus,
});

const store = configureStore({ reducer: allReducers });

export default store;
