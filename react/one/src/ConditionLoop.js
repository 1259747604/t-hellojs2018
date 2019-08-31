import React, {Component} from 'react'

export default class ConditionLoop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTitle: true,
            group:[
                {val:0},
                {val:1},
                {val:2},
                {val:3},
            ]
        }
        // setTimeout(()=>{
        //     this.setState({
        //         showTitle:false
        //     })
        // },3000)
    }
    showTitleFun(){
        this.setState({
            showTitle:false
        })
    }
    render() {
        //第二种写法
        // let result = this.state.showTitle?<p>{this.props.title}</p>:null
        //第三种写法
        // let result
        // if(this.state.showTitle){
        //     result = <p>{this.props.title}</p>
        // }
        // else{
        //     result = null
        // }
        return (
            <div>
                数据条件渲染和数据循环渲染展示
                <div>
                    {/*用箭头函数解决this指向问题*/}
                    <button onClick={()=>{this.showTitleFun()}}>不显示title</button>
                </div>
                {/*条件渲染的第一种写法*/}
                {this.state.showTitle?<p>{this.props.title}</p>:null}
                {/*第二种条件渲染的写法 */}
                {/*{result}*/}
                {/*循环渲染 */}
                <ul>
                    {
                        this.state.group.map(item => {
                            return <li key={item.val}>{item.val}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
