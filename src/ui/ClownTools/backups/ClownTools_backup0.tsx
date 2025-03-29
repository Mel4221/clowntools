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
    return(
        <Container fluid>
       
        <Form>
        <Row>
            <Col md>
                <Form.Group controlId='formTest'>
                    <Form.Label>Form Tester</Form.Label>
                    <Form.Control type='email' placeholder='s@t.com'/>
                    <Form.Text 
                    className='text-muted'
                    style={{color:'white'}}>
                        we don't steal your data , trust me bro
                    </Form.Text>
                </Form.Group>
            </Col>
            <Col md>
                <Form.Group controlId='formTest2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='password'/>
                    <Form.Text 
                    className='text-white'>
                        we don't steal your data , trust me bro
                    </Form.Text>
                  
                </Form.Group>
            </Col>
            <Button type='submit' variant='secondary'>
                        Submit
            </Button>
            </Row>
        </Form>
      
        <Card>
            <Card.Img style={{width:'200px',height:'200px'}} src='./favicon.ico'/>
            <Card.Body>
                <Card.Title>
                    Card Test
                </Card.Title>
                <Card.Text>
                    This is working pretty well...
                </Card.Text>
            </Card.Body>

        </Card>

        <Breadcrumb>
            <BreadcrumbItem>
                A
            </BreadcrumbItem>
            <BreadcrumbItem>
                B
            </BreadcrumbItem>
            <BreadcrumbItem active>
                C
            </BreadcrumbItem>
        </Breadcrumb>
        
        <Alert variant='success'>ok</Alert>
        
        <Button variant='primary'>Working...</Button>
        </Container>
        
    )
    return (


        <div className="bg-dark text-white w-100 p-4">
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
        </div>

    );
}

export default ClownTools;
