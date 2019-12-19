import React, {Component} from 'react';
// import Button from 'antd/es/button'
import { Button } from 'antd';
//配置按需加载后不需要引入css
// import 'antd/dist/antd.css';

class App1 extends Component {
    render() {
        return (
            <div>
                <h1>antD样式</h1>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default App1;