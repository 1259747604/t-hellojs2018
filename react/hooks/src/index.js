import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import UseContext from './usecontext/UseContext';
import UseReduce from './usereduce/UseReduce';
import Other from './Other';

// ReactDom.render(<App></App>,document.getElementById('root'))
//使用usecontext
ReactDom.render(<Other></Other>, document.getElementById('root'));
