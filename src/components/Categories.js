import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const checkStatus = useSelector((state) => state.checkStatus);
  return (
    <div>
      {checkStatus ? (
        <button type="button" className="check">
          Check Status
        </button>
      ) : (
        <h3>Under Construction</h3>
      )}
    </div>
  );
};

export default Categories;
