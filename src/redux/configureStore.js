import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import checkStatus from './categories/categories';

const allReducers = combineReducers({
  book: bookReducer,
  status: checkStatus,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
