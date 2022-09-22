/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookList } from '../redux/books/books';

const BookDetail = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookList(props.id));
  };
  const percentage = 66;
  return (
    <div className="bookContainer">
      <p className="category">
        {props.category}
      </p>
      <p className="bookTitle">
        {props.title}
      </p>
      <p className="author">
        {props.author}
      </p>
      <div className="items">
        <p className="price">
          Comments
        </p>
        <p className="hr"> | </p>
        <button type="button" className="removeBtn" onClick={handleRemove}>
          Remove
        </button>
        <p className="hr"> | </p>
        <p className="price">
          Edit
        </p>
      </div>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          styles={{
            path: {
              stroke: '#379cf6',
              strokeLinecap: 'butt',
            },
          }}
        />
      </div>
      <div className="vl" />
      <button type="button" className="update">UPDATE PROGRESS</button>
      <h3 className="complete">Completed</h3>
      <h3 className="chapter">CURRENT CHAPTER</h3>
    </div>
  );
};

export default BookDetail;
