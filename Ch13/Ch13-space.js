import './App.css';
import { Space,Button } from 'antd';


function App(){

    return(

        <div>
            <Space size='middle'>
                <Button type='primary'>Primary</Button>
                <Button>Default</Button>
                <Button type='dashed'>Dashed</Button>
                <Button type='link'>Link</Button>
                <Button type="primary" shape="circle">
                    S
                </Button>
            </Space>
        </div>
    )

}

export default App;




