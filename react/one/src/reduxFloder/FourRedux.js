import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { add, reduce, asyncAdd } from './count.redux';

@connect(
  state => {
    return {
      count: state
    };
  },
  {
    add,
    reduce,
    asyncAdd
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
