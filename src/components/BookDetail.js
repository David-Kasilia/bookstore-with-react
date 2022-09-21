/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookDetail = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const handleRemove = async () => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZPIIXJcS0uJKHlhqGIyi/books/${id}`);
    dispatch(removeBook(id));
  };

  return (
    <div>
      <p>
        Book Title:
        {title}
      </p>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" className="removeBtn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

BookDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookDetail;
