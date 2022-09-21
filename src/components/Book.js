/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import {
  getBooksList, getBookStatus,
} from '../redux/books/books';

const Book = () => {
  const bookList = useSelector((state) => [...state.books]);
  const bookStatus = useSelector(getBookStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(getBooksList());
    }
  }, []);

  return (
    <div>
      {bookList.map((book) => (<BookDetail key={book.item_id} id={book.item_id} title={book.title} author={book.author} category={book.category} />))}
      <AddBook />
    </div>
  );
};

export default Book;
