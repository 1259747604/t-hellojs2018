import React, { Component } from 'react';
import store from './store';
import { Button } from 'antd';
import { connect } from 'react-redux';

@connect(
  state => {
    return {
      count: state
    };
  },
  //   简写
  //   state => ({count:state})
  //   dispatch => ({
  //     add: () => dispatch({ type: 'add' }),
  //     reduce: () => dispatch({ type: 'reduce' })
  //   })
  //   因为redux默认只支持同步写法，所以上面的返回dispatch的方法可以简写成
  {
    add: () => ({
      type: 'add'
    }),
    reduce: () => ({
      type: 'reduce'
    }),
    asyncAdd: () => dispatch => {
      setTimeout(() => {
        return dispatch({ type: 'add' });
      }, 2000);
    }
  }
)
class ThreeRedux extends Component {
  render() {
    return (
      <div>
        {/* 获取数据 */}
        <h1>redux累加器:{this.props.count}</h1>
        <Button
          onClick={() => {
            this.props.add();
          }}
        >
          加
        </Button>
        <Button
          onClick={() => {
            this.props.reduce();
          }}
        >
          减
        </Button>
        <Button
          onClick={() => {
            this.props.asyncAdd();
          }}
        >
          异步加
        </Button>
      </div>
    );
  }
}

export default ThreeRedux;
