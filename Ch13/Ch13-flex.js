import './App.css';
import { Divider, Col, Row } from 'antd';


function App(){
    return(
        <div className='App1'> 
            <>
                <Divider orientation='left'>Percentage colums</Divider>
                <Row>
                    <Col flex={2}>2/5</Col>
                    <Col flex={3}>3/5</Col>
                </Row>
                <Divider orientation='left'>Fill rest</Divider>
                <Row>
                    <Col flex='100px'>100px</Col>
                    <Col flex='auto'>Fill Rest</Col>
                </Row>
                <Divider orientation='left'>Raw flex style</Divider>
                <Row>
                    <Col flex='1 1 200px'>1 1 200px</Col>
                    <Col flex='0 1 300px'>0 1 300px</Col>
                </Row>

                <Row wrap={false}>
                    <Col flex='none'>
                        <div style={{padding: '0 16px'}}></div>
                    
                    </Col>
                    <Col flex='auto'>auto with no-warp</Col>
                </Row>
            </>
        </div>
    )

}
export default App;




