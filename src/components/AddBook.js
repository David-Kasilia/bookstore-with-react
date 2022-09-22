/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { createNewBook } from '../redux/books/books';

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

  const addBookToList = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuid(), title, author, category,
    };
    dispatch(createNewBook(book));
    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Add Book Title" value={title} onChange={handleBookTitle} />
        <input type="text" placeholder="Add Book Author" value={author} onChange={handleBookAuthor} />
        <input type="text" placeholder="Add Book Category" value={category} onChange={handleBookCategory} />
        <button type="button" className="btn" onClick={title !== '' && author !== '' && category !== '' ? addBookToList : () => 'form is empty'}>Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
