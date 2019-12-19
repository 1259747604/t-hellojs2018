const firstReducer = (state = 10, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'reduce':
      return state - 1;
    default:
      return state;
  }
};

const add = () => ({
  type: 'add'
});
const reduce = () => ({
  type: 'reduce'
});
const asyncAdd = () => dispatch => {
  setTimeout(() => {
    return dispatch({ type: 'add' });
  }, 2000);
};
export { firstReducer, add, reduce, asyncAdd };
