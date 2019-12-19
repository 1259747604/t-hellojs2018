import React from 'react';
import ReactDom from 'react-dom';
// import App from './App'
// import LifeCycle from './LifeCycle'
// import App1 from './App1';
// import Purememo from  './Purememo'
// import Composition from './Composition'
// import Hoc from './HOC/HOC';
// import Context1 from './HOC/Context1'
// import Context2 from './HOC/Context2';
import FirstRedux from './reduxFloder/FirstRedux';
import store from './reduxFloder/store';

// ReactDom.render(<App/>,document.getElementById('root'))
//演示生命周期
// ReactDom.render(<LifeCycle/>,document.getElementById('root'))
//演示ant组件库
// ReactDom.render(<App1/>,document.getElementById('root'))
//使用pureComponent和memo
// ReactDom.render(<Purememo/>,document.getElementById('root'))
//组件复合写法
// ReactDom.render(<Composition/>,document.getElementById('root'))
//高阶组件
// ReactDom.render(<Hoc title="一个属性"/>,document.getElementById('root'))
//组件上下文
// ReactDom.render(<Context2 />, document.getElementById('root'));
// 原生redux
// const render = () => {
//   ReactDom.render(<FirstRedux />, document.getElementById('root'));
// };
// render();
// store.subscribe(render);

// react-redux
import { Provider } from 'react-redux';
// import TwoRedux from './reduxFloder/TwoRedux';
// import ThreeRedux from './reduxFloder/ThreeRedux';
// ReactDom.render(
//   <Provider store={store}>
//     <ThreeRedux />
//   </Provider>,
//   document.getElementById('root')
// );

// import FourRedux from './reduxFloder/FourRedux';
// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { firstReducer } from './reduxFloder/count.redux';
// const store1 = createStore(firstReducer, applyMiddleware(thunk, logger));
// ReactDom.render(
//   <Provider store={store1}>
//     <FourRedux />
//   </Provider>,
//   document.getElementById('root')
// );

// 路由
import RouterSample from './reactrouter/RouterSample';
ReactDom.render(<RouterSample />, document.getElementById('root'));
