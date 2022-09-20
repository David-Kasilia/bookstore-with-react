// Action Type
const STATUS = 'bookStore/category/STATUS';

const initialState = [];
// Reducer Function
const checkStatus = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';

    default:
      return state;
  }
};

// Check Status for  Category action

export const statusCheck = () => ({
  type: 'STATUS',
});

export default checkStatus;
