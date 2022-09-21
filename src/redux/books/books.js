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
    case FETCH_BOOKS:
      return [
        ...state,
      ];

    case ADD:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

// Fetch Books action From BookStore API
export const fetchBooks = () => ({
  type: 'FETCH_BOOKS',
});

// Add A Book action

export const addBook = (book) => ({
  type: 'ADD',
  payload: book,
});

// Remove a book action

export const removeBook = (index) => ({
  type: 'REMOVE',
  payload: index,
});

export default bookReducer;
