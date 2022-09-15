/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import RemoveBtn from './RemoveBtn';

const BookDetail = (props) => (
  <div>
    <p>
      Book Title:
      {props.title}
    </p>
    <p>
      Author:
      {props.author}
    </p>
    <RemoveBtn />
  </div>
);

export default BookDetail;
