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


function ToolsStatus() {
    
    return (
        <Row className='border border-white border-2 rounded p-3 flex-grow-0'> 
            <Col>
            <div className="p-2">
                <small className="text-white d-block mb-1">
                    Task 1/1 {/* Add your message here */}
                </small>
                <div className="progress bg-dark bg-opacity-25" style={{ height: '8px' }}>
                    <div 
                        className="progress-bar bg-white" 
                        role="progressbar" 
                        style={{ width: '100%' }} 
                        aria-valuenow={50} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                    ></div>
                </div>
            </div>
            </Col>
            <Col>
                    Random Message
            </Col>
        </Row>
    );
}

export default ToolsStatus;
