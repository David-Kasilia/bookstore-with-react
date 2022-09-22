/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookList } from '../redux/books/books';

const BookDetail = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookList(props.id));
  };

  return (
    <div className="bookContainer">
      <p>
        Book Title:
        {props.title}
      </p>
      <p>
        Author:
        {props.author}
      </p>
      <p>
        Category:
        {props.category}
      </p>
      <button type="button" className="removeBtn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default BookDetail;
