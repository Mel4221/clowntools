import React, { createContext, useState} from 'react';
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
import Label from 'react-bootstrap/FormLabel';
import Tools from './Tools';
import ToolsStatus from './ToolsStatus';
import { ClownToolsProvider } from './ClownToolsContext';


function ClownTools() {

    
    return (
    <ClownToolsProvider>
        <div style={{ 
            height: '100vh', 
            background: 'black',
            display: 'flex',
            flexDirection: 'column'
        }} className="text-white w-100">
            
                <Container fluid className="h-100 d-flex flex-column">
                    <Tools />  
                    <ToolsStatus/>  
                </Container>
        </div>
    </ClownToolsProvider>
    );
}

export default ClownTools;
