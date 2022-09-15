/* eslint-disable react/prop-types */
import React from 'react';

const RemoveBtn = ({ text }) => (
  <button type="button" className="removeBtn">
    {text}
  </button>
);

RemoveBtn.defaultProps = {
  text: 'Remove',
};

export default RemoveBtn;
