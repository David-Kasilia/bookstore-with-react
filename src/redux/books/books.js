// Actions
const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

// Initial State
export const initialState = [
  {
    item_id: '1',
    title: 'Where We End & Begin',
    author: 'Jane Igharo',
    category: 'Adventure',
  },
  {
    item_id: '2',
    title: 'Strength In Numbers',
    author: 'Elliot',
    category: 'Life Story',
  },
  {
    item_id: '3',
    title: 'Watch And Learn',
    author: 'Mitch',
    category: 'Motivational',
  },
];

// Reducer Function

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE:
      return state.filter((book) => book !== action.bookId);

    case FETCH_BOOKS:
      return [...state];

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

// Fetch Books action From BookStore API
export const fetchBooks = () => ({
  type: 'FETCH_BOOKS',
});

export default bookReducer;
