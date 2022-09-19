// Actions
const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

// Initial State
export const initialState = [
  {
    id: 1,
    title: 'Where We End & Begin',
    author: 'Jane Igharo',
  },
  {
    id: 2,
    title: 'Strength In Numbers',
    author: 'Elliot',
  },
  {
    id: 3,
    title: 'Watch And Learn',
    author: 'Mitch',
  },
];

// Reducer Function

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE:
      return state.filter((book) => book !== action.bookId);

    default:
      return state;
  }
};

// Add A Book action

export const addBook = (book) => ({
  type: 'ADD',
  book,
});

// Remove a book action

export const removeBook = (bookId) => ({
  type: 'REMOVE',
  bookId,
});

export default bookReducer;
