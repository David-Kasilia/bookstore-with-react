/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookDetail = (props) => {
  const { id, title, author } = props;

  const dispatch = useDispatch();
  const handleRemove = () => {
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
      <button type="button" className="removeBtn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

BookDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetail;
