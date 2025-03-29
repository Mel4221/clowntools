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

function ClownTools() {
    
    return (
        <div className="bg-dark text-white w-100 p-4">
            <Container>
                    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href=".">Action</a>
                                    <a className="dropdown-item" href=".">Another action</a>
                                    <a className="dropdown-item" href=".">Something else here</a>
                                    <div role="separator" className="dropdown-divider"></div>
                                    <a className="dropdown-item" href=".">Separated link</a>
                                </div>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                        </div>
                    </div>
                
            </Container>
        </div>
    );
}

export default ClownTools;
