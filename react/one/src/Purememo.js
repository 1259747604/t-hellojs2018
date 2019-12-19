import React, {Component, PureComponent} from 'react';


/*class Title extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.title !== this.props.title
    }

    render() {
        console.log('标题组件')
        return (
            <div>
                <p>标题</p>
                <p>{this.props.title}</p>
            </div>
        );
    }
}*/
//可以使用pureComponent代替生命周期
/*class Title extends PureComponent {
    render() {
        console.log('标题组件')
        return (
            <div>
                <p>标题</p>
                <p>{this.props.title}</p>
            </div>
        );
    }
}*/
//使用memo代替以上组件 让函数式组件也拥有pureComponent的功能
const Title = React.memo((props)=>{
    console.log('标题组件')
    return(
        <div>
            <p>标题</p>
            <p>{props.title}</p>
        </div>
    )
})


class Count extends Component {

    render() {
        console.log('个数组件')
        return (
            <div>
                <p>数量</p>
                <p>{this.props.count}</p>
            </div>
        );
    }
}


class Purememo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'这是一个标题',
            count:0
        }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                count:this.state.count + 1
            })
        },1000)
    }

    render() {
        return (
            <div>
                pureComponent
                <Title title={this.state.title}></Title>
                <Count count={this.state.count}></Count>
            </div>
        );
    }
}

export default Purememo;