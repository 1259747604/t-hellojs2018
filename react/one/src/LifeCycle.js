import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleSon extends Component {
  constructor(props) {
    super(props);
    console.log('1构造函数');
  }
  componentWillMount() {
    //    组件将要挂在，这个时候可以进行api的调用，获取数据，但是不能操作dom
    console.log('2组件将要挂载');
  }
  componentDidMount() {
    //    组件已经挂载 可以进行dom操作 对状态进行更新操作
    console.log('3组件已经挂载');
  }
  componentWillReceiveProps(nextProps, nextContext) {
    //    父组件传递的属性有变化 可以在这里做出相应的相应操作
    console.log('4父组件传递的属性更新了');
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //    组件是否需要更新 需要返回一个bool值 返回true更新 返回false不更新 这是一个优化点
    console.log('5组件是否应该更新 返回一个bool值');
    return true;
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    //    组件将要更新
    console.log('6组件将要更新');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //    组件已经更新
    console.log('7组件已经更新');
  }
  componentWillUnmount() {
    //    组件销毁
    console.log('组件已经销毁');
  }

  render() {
    console.log('组件渲染');
    return (
      <div>
        生命周期的演示
        {this.props.title}
      </div>
    );
  }
}

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      son: '测试属性',
      showSon: true
    };
    setTimeout(() => {
      this.setState({
        son: '更新'
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        showSon: false
      });
    }, 4000);
  }
  render() {
    return (
      <div>
        {this.state.showSon ? (
          <LifeCycleSon title={this.state.son} />
        ) : (
          <div>组件已销毁</div>
        )}
      </div>
    );
  }
}
export default LifeCycle;
