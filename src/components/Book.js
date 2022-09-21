/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import { fetchBooks } from '../redux/books/books';

const Book = () => {
  const bookList = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    const booksObj = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZPIIXJcS0uJKHlhqGIyi/books');
    if (booksObj.data) {
      Object.keys(booksObj.data).forEach((itemId) => {
        const data = booksObj.data[itemId];
        const book = Object.assign({}, { item_id: itemId }, ...data);
        if (bookList.find((book) => book.item_id === itemId)) {
          if (itemId !== bookList.find((book) => book.item_id === itemId).item_id) {
            bookList.push(book);
          }
        } else {
          bookList.push(book);
        }
      });
      return dispatch(fetchBooks());
    }
    return 'Book List Empty';
  }, []);
  return (
    <div>
      {bookList.map((book) => <BookDetail key={book.item_id} id={book.item_id} title={book.title} author={book.author} category={book.category} />)}
      <AddBook />
    </div>
  );
};

export default Book;
