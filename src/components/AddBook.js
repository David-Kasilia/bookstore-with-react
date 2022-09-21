import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setBookTitle] = useState('');
  const [author, setBookAuthor] = useState('');
  const [category, setBookCategory] = useState('');

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };
  const handleBookCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const addBookToList = async () => {
    const addNewBook = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZPIIXJcS0uJKHlhqGIyi/books', {
      item_id: uuidv4(),
      title,
      author,
      category,
    });
    dispatch(addBook(addNewBook));
    window.location.reload();
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Add Book Title" value={title} onChange={handleBookTitle} />
        <input type="text" placeholder="Add Book Author" value={author} onChange={handleBookAuthor} />
        <input type="text" placeholder="Add Book Category" value={category} onChange={handleBookCategory} />
        <button type="submit" className="btn" onClick={addBookToList}>Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
