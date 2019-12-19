import React, {Component} from 'react';
//使用context
// let store = {
//     name:"测试名字",
//     from:0
// }
//创建上下文
const XdContext = React.createContext();
const {Provider,Consumer} = XdContext;

function Info(props) {
    return(
        <div>
            <Consumer>
                {
                    store => {
                        return(
                            <div>
                                <p>name:{store.name}</p>
                                <p>form:{store.from}</p>
                            </div>
                        )
                    }
                }
            </Consumer>
        </div>
    )
}

function ToolBar(props) {
    return (
        <div>
            <Info></Info>
        </div>
    )
}

class Context2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            store : {
                name:"测试名字",
                from:0
            }
        }
        setInterval(()=>{
            console.log(this.state.store.from)
            this.setState((prevState)=>(
                {
                    store:{
                        from:prevState.store.from+1
                    }
                }
            ))
            // this.setState({
            //     store:{
            //         from: this.state.store.from+1
            //     }
            // })
        },1000)
    }
    render() {
        return (
            <div>
                <Provider value={this.state.store}>
                    <ToolBar></ToolBar>
                </Provider>
            </div>
        );
    }
}

export default Context2;