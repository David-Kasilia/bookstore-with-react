import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
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

  const addBookToList = () => {
    dispatch(createNewBook({
      item_id: uuidv4(),
      title,
      author,
      category,
    })).unwrap();
    window.location.reload();
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
