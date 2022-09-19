import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const addNewBook = () => {
    if (bookTitle !== '' && bookAuthor !== '') {
      dispatch(addBook)({ id: uuidv4(), bookTitle, bookAuthor });
      setBookTitle('');
      setBookAuthor('');
    }
  };
  return (
    <div>
      <form>
        <input type="text" placeholder="Book Title" value={bookTitle} onChange={handleBookTitle} />
        <input type="text" placeholder="Book Author" value={bookAuthor} onChange={handleBookAuthor} />
        <button type="submit" className="btn" onClick={addNewBook}>Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
