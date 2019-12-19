import React ,{useState,useEffect}from 'react';
//使用useeffect
function Effect() {
    const [count,setCount] = useState(0)

    //空数组只执行一次
    //数组是常量也只执行一次
    //数组是改变的话就会执行
    //如果不传也是每次都执行
    useEffect(()=>{
        document.title = `你点击了${count}次`
        return()=>{
            //处理组件的更新和卸载
            console.log('组件卸载或更新')
        }
    },[count])
    return(
        <div>
            <div>你点击了多少次,{count}</div>
            <button onClick={()=>{setCount(count+1)}}>点击加一</button>
        </div>
    )
}

function App(props) {
    const [count,setCount] = useState(0)
    return (
        <div>
            <div>你点击了多少次,{count}</div>
            <div>
                <button onClick={()=>{setCount(count+1)}}>点击加一</button>
                <button onClick={()=>{setCount(count-1)}}>点击减一</button>
            </div>
            {count <= 10?<Effect></Effect>:null}

        </div>
    );
}

export default App;