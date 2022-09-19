/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const RemoveBtn = (props) => {
  const dispatch = useDispatch();
  const { bookId } = props;
  const handleRemove = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <button type="button" className="removeBtn" onClick={handleRemove}>
      Remove
    </button>
  );
};

RemoveBtn.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default RemoveBtn;
