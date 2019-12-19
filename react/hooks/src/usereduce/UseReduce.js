import React, { useReducer } from 'react';
import { Button } from 'antd';

const initState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'rest':
      return initState;
    case 'add':
      return { count: state.count + 1 };
    case 'reduce':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReduce() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>数量:{state.count}</h1>
      <Button onClick={() => dispatch({ type: 'rest' })}>重置</Button>
      <Button onClick={() => dispatch({ type: 'add' })}>加一</Button>
      <Button onClick={() => dispatch({ type: 'reduce' })}>减一</Button>
    </div>
  );
}
