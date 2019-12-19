import React ,{useContext} from 'react';
import {context} from './UseContext'

// function UseContext({Context}) {
//     const ctx = useContext(Context);
//     return (
//         <div>
//             <p>
//                 {ctx.name}
//             </p>
//             <p>
//                 {ctx.age}
//             </p>
//         </div>
//     );
// }
function UseContext() {
    const ctx = useContext(context);
    return (
        <div>
            <p>
                {ctx.name}
            </p>
            <p>
                {ctx.age}
            </p>
        </div>
    );
}

export default UseContext;