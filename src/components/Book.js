/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BookDetail from './BookDetail';

const Book = () => {
  const bookList = useSelector((state) => state.book);
  return (
    <div>
      {bookList.map((book) => <BookDetail key={book.id} id={book.id} title={book.title} author={book.author} />)}
      <AddBook />
    </div>
  );
};

export default Book;
