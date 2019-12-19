import React ,{useContext} from 'react';
import Child from './ContextChild'
//创建context对象
export const context = React.createContext({name:"妹子",age:18})
function UseContext(props) {
    const ctx = useContext(context);
    console.log(ctx)
    return (
        <div>
            <p>
                {ctx.name}
            </p>
            <p>
                {ctx.age}
            </p>
            {/*<Child Context={context}></Child>*/}
            <Child></Child>
        </div>
    );
}

export default UseContext;