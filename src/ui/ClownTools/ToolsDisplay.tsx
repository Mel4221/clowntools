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
import { Download } from 'react-bootstrap-icons';
import YouZ from './Tools/YouZ/YouZ';

interface ToolsType {
    Tool: React.ComponentType | null; // Define the type for the Tool prop
} 
/*
// global.d.ts
interface Window {
    electronAPI: {
      runCommand: (command: string) => Promise<string>;
    };
  }
  */

 

const ToolsDisplay: React.FC<ToolsType> = ({ Tool }) => {
    return (
        <Col style={{ height: '80vh' }}>
             
            <Container fluid className="h-100 d-flex flex-column p-0 m-0 flex-grow-1 overflow-hidden">
                {Tool ? (
                    <Tool />
                ) : (
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h2 className="text-white">Welcome to ClownTools</h2>
                        <p className="text-white">Select a tool from the sidebar to get started.</p>
                    </div>
                )}
            </Container>
        </Col>
    );
};

export default ToolsDisplay;