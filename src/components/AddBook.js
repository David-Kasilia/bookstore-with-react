/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createNewBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setBookTitle] = useState('');
  const [author, setBookAuthor] = useState('');
  const [category, setBookCategory] = useState('');
  const [addBookStatus, setAddBookStatus] = useState('idle');

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };
  const handleBookCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const canAdd = [title, author, category].every(Boolean) && addBookStatus === 'idle';

  const addBookToList = () => {
    if (canAdd) {
      try {
        setAddBookStatus('pending');
        dispatch(createNewBook({
          item_id: uuidv4(), title, author, category,
        })).unwrap();
        setBookTitle('');
        setBookAuthor('');
        setBookCategory('');
      } catch (error) {
        return error.message;
      } finally {
        setAddBookStatus('idle');
      }
    }
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
