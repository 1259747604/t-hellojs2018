import React, { Component } from 'react';
import store from './store';
import { Button } from 'antd';

export default class FirstRedux extends Component {
  render() {
    return (
      <div>
        {/* 获取数据 */}
        <h1>redux累加器:{store.getState()}</h1>
        <Button
          onClick={() => {
            store.dispatch({ type: 'add' });
          }}
        >
          加
        </Button>
        <Button
          onClick={() => {
            store.dispatch({ type: 'reduce' });
          }}
        >
          减
        </Button>
      </div>
    );
  }
}
