/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import {
  getBooksList, getBookStatus, getBookError,
} from '../redux/books/books';

const Book = () => {
  const bookList = useSelector((state) => state.books.books);
  const bookStatus = useSelector(getBookStatus);
  const bookError = useSelector(getBookError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(getBooksList());
    }
  }, [bookStatus, dispatch]);

  let content;
  if (bookStatus === 'Loading') {
    content = <p className="loading">Loading...</p>;
  } else if (bookStatus === 'Success') {
    content = Object.keys(bookList).map((book) => (<BookDetail key={uuid()} books={book} />));
  } else if (bookStatus === 'Failed') {
    content = <p>{bookError}</p>;
  }

  return (
    <div>
      {content}
      <AddBook />
    </div>
  );
};

export default Book;
