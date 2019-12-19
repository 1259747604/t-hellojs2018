import React, {Component} from 'react';

//没使用上下文时候的写法 每一层都要把最上层传入的组件属性全部传下去

//数据源
let store = {
    name:"测试名字",
    from:'store'
}

function Info(props) {
    return(
        <div>
            <p>name:{props.name}</p>
            <p>form:{props.form}</p>
        </div>
    )
}

function ToolBar(props) {
    return (
        <div>
            <Info {...props}></Info>
        </div>
    )
}

class Context1 extends Component {
    render() {
        return (
            <div>
                <ToolBar name={store.name} form={store.from}></ToolBar>
            </div>
        );
    }
}

export default Context1;