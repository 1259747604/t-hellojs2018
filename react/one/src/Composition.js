import React from 'react';

function Dialog(props) {
    return(
        <div style={{border:`5px solid ${props.color}`}}>
            {/*相当于vue里面的匿名插槽*/}
            {props.children}
            {/*相当于vue里的具名插槽*/}
            <div>
                {props.footer}
            </div>
        </div>
    )
}

function Composition(props) {
    let btn = (<button onClick={()=>alert('弹出')}>点击</button>);
    return (
        <div>
            <h1>复合写法</h1>
            <Dialog color="pink" footer={btn}>
                <p>这是一个匿名插槽</p>
                <p>这还是一个匿名插槽</p>
            </Dialog>
        </div>
    );
}

export default Composition;