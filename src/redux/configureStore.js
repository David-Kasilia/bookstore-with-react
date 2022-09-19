import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatus from './categories/categories';

const allReducers = combineReducers({
  book: bookReducer,
  checkStatus,
});

const store = configureStore(allReducers);

export default store;
