const initialState = 0;

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_STREAK':
      return (state += 1);
    case 'RESET_STREAK':
      return 0;
    default:
      return state;
  }
};

export default reducer;
