/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import { getBooksList } from '../redux/books/books';

const Book = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksList());
  }, []);

  return (
    <div>
      {books.map((book) => (<BookDetail key={uuid()} id={book.item_id} title={book.title} author={book.author} category={book.category} />))}
      <hr />
      <AddBook />
    </div>
  );
};

export default Book;
