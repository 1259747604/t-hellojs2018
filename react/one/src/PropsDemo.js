// import React, {Component} from 'react';
//
// class PropsDemo extends Component {
//
//     render() {
//         return (
//             <div>
//                 {this.props.title}
//             </div>
//         );
//     }
// }
//
// export default PropsDemo;

//rfc
// 函数形组件
import React from 'react'

export default function PropsDemo(props) {
  return <div>{props.title}</div>
}

