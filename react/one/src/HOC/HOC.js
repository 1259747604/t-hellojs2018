import React, {Component} from 'react';

//编写第一个高阶组件，传递一个组件进去 返回一个新的组件 (函数式组件)
const withLearnReact = (ComP)=>{
    const NewComponent = (props)=>{
        return <ComP {...props} name="测试新增属性"></ComP>
    }
    return NewComponent
}

//编写第二个高阶组件 重写生命周期 重写生命周期需要class组件
const withLifeCycle = Comp =>{
    class NewComponent extends Component{
        componentDidMount() {
            console.log('重写生命周期')
        }

        render() {
            return (
                <div>
                    <Comp {...this.props}></Comp>
                </div>
            );
        }
    }
    return NewComponent
}

//装饰器写法
@withLearnReact
@withLifeCycle
class Hoc extends Component {
    render() {
        return (
            <div>
                <h1>高阶组件</h1>
                {this.props.title}
                <p>{this.props.name}</p>
            </div>
        );
    }
}
export default Hoc
// export default withLearnReact(Hoc);
//链式调用
// export default withLifeCycle(withLearnReact(Hoc));
