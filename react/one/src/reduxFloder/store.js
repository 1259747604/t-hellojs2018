import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const a = (state = 10, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'reduce':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(a, applyMiddleware(thunk, logger));
export default store;
