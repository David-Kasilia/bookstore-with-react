import React from 'react';

const AddBook = () => (
  <div>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit" className="btn">Add Book</button>
    </form>
  </div>
);

export default AddBook;
