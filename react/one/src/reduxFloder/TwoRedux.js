import React, { Component } from 'react';
import store from './store';
import { Button } from 'antd';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({ type: 'add' }),
    reduce: () => dispatch({ type: 'reduce' })
  };
};

class TwoRedux extends Component {
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoRedux);
