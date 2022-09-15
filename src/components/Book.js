import React from 'react';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import Books from './Books';

const Book = () => {
  const bookList = Books.map((book) => (
    <BookDetail title={book.title} author={book.author} key={book.id} />
  ));

  return (
    <div>
      {bookList}
      <AddBook />
    </div>
  );
};

export default Book;
