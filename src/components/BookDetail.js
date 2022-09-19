/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import RemoveBtn from './RemoveBtn';

const BookDetail = (props) => {
  const { bookTitle, bookAuthor } = props;

  return (
    <div>
      <p>
        Book Title:
        {bookTitle}
      </p>
      <p>
        Author:
        {bookAuthor}
      </p>
      <RemoveBtn />
    </div>
  );
};

BookDetail.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
};

export default BookDetail;
