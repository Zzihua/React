import './App.css';
import { Divider, Col, Row , Watermark} from 'antd';


function App(){
    return(
        <div className='App1'> 
            <Watermark content={['Ant Design',' 花枝']}>
                <div style={{height:500}}>
                <>
                    <Row>
                        <Col style={{borderStyle:'solid'}} span={3}>col-3</Col>
                        <Col style={{borderStyle:'solid'}} span={12}>col-12</Col>
                        <Col style={{borderStyle:'solid'}} span={9}>col-9</Col>
                    </Row>
                    <Row>
                        <Col style={{borderStyle:'solid'}} span={8}>col-8</Col>
                        <Col style={{borderStyle:'solid'}} span={2}>col-2</Col>
                        <Col style={{borderStyle:'solid'}} span={14}>col-14</Col>
                    </Row>
                </>
                </div>
            </Watermark>
        </div>
    )

}
export default App;




