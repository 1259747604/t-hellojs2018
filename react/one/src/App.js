import React from 'react'
import PropsDemo from './PropsDemo'
import ConditionLoop from './ConditionLoop'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cc: '哦哦哦哦哦哦哦',
      count: 0
    }
  }
  /*这和在constructor里的写法一样*/
  // state={
  //   bb:'噢噢噢噢'
  // }
  componentDidMount() {
    /*this.setState({
            count:this.state.count + 1
        },()=>{
            console.log('2',this.state.count)
        })//这是一个异步的操作
        console.log('1',this.state.count)*/
    //如果修改的state依赖上一次更新的state 可以这样写
    /*        this.setState((pre,prevProps)=>{
            return {
                count: pre.count + 1
            }
        })*/
    //上面代码的简略写法
    this.setState((prevState, prevProps) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    const aa = '啊啊啊啊啊啊'

    return (
      <div>
        {/* 变量渲染 */}
        aaaa
        <p>{aa}</p>
        <p>{this.state.bb}</p>
        <p>{this.state.cc}</p>
        <p>{this.state.count}</p>
        {/* 组件属性传递 */}
        <PropsDemo title="这是一个属性" />
        {/* 条件渲染 */}
        <ConditionLoop title="条件渲染"/>
      </div>
    )
  }
}
