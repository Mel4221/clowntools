import React from 'react';
//import '../bootstrap/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import  Breadcrumb  from 'react-bootstrap/Breadcrumb';
import  BreadcrumbItem  from 'react-bootstrap/BreadcrumbItem';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Nav  from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Label from 'react-bootstrap/FormLabel'


function ClownTools() {
    
    return (
        <div style={{background:'black'}}className="text-white w-100 p-4">
            <Container fluid>
                <Row className='border border-white border-2 rounded p-3'>
                    
                    <Col>
                        <label>Current Tool</label>
                    </Col>
                    <Col className='col d-flex justify-content-end align-items-end'>
                        <Button variant='secondary'>Settings</Button>
                    </Col>
                </Row>
                <Row className='border border-white border-2 rounded p-3'>
                    <Col sm='2' className='border border-white border-2 rounded p-3 m-0'>
                        <Row 
                        style={{ textAlign: 'center',margin:'10px',padding:'2px' }}>
                            <Button variant='btn-outline-secondary  ' disabled>Tools</Button>
                        </Row>
                        <Tabs 
                        className='flex-column nav-fill' 
                        style={{borderBottom:'none'}}>
                            <Tab eventKey="item-1" title="YouZ">
                            </Tab>
                            <Tab eventKey="item-2" title="YSync">
                            </Tab>
                            <Tab eventKey="item-3" title="UShare">
                            </Tab>
                        </Tabs>
                    </Col>

                    <Col>
                    <Container className='m-0 p-0'>
                         <Card>
                            <Card.Img 
                            style={{margin:'0%'}}
                            src='img.jpg'/>
                         </Card>
                    </Container>
                    </Col>
                </Row> 
                 
                <Row className='border border-white border-2 rounded p-3'> 
                    <Col>
                        Progress Bar
                    </Col>
                    <Col>
                        Logs or messages
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ClownTools;
