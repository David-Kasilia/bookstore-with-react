// Action Type
const STATUS = 'bookStore/category/STATUS';
const ADD_CATEGORY = 'bookStore/books/ADD_CATEGORY';
const REMOVE_CATEGORY = 'bookStore/books/REMOVE_CATEGORY';

// Reducer Function
const checkStatus = (state = false, action) => {
  switch (action.type) {
    case STATUS:
      return !state;
    case ADD_CATEGORY:
      return [...state, action.book];

    case REMOVE_CATEGORY:
      return state.filter((book) => book !== action.bookId);

    default:
      return state;
  }
};

// Add A Book Category action

export const addBook = (book) => ({
  type: 'ADD_CATEGORY',
  book,
});

// Remove a book Category action

export const removeBook = (bookId) => ({
  type: 'REMOVE_CATEGORY',
  bookId,
});

export default checkStatus;
