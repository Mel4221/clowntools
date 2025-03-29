import { useEffect, useState  } from 'react'
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


function YouZ() {
    const[imgUrl,setImageUrl] = useState("/img.jpg");

    useEffect(() => {
        const fetchClownMessage = async () => {
          try {
            // @ts-ignore
            const message = await electron.getClownMessage();
            const img = `${message.type}/img.jpg`;
            //setImageUrl(img);


            console.log(img);
          } catch (error) {
            console.error('Error fetching clown message:', error);
          }
        };
      
        fetchClownMessage();
      
        // If getClownMessage returns a cleanup function (like an unsubscribe),
        // you'll need to handle it differently with async/await
        return () => {
          // If there's any cleanup needed, it would go here
          // Note: You can't return the promise directly from useEffect cleanup
        };
      }, []);

    return (
         <>
                <Row className="p-3">
                    <Col>
                        <Form>
                            <Form.Control 
                                type="text" 
                                placeholder="Search videos..." 
                                className="rounded-pill"
                            />
                        </Form>
                    </Col>
                </Row>

                {/* Scrollable Video Grid */}
                <Row className="flex-grow-1 overflow-auto m-0 p-3">
                    <Col>
                        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                            {/* Video Items - Use map in real application */}
                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14].map((item) => (
                                <Col key={item}>
                                    <Card className="h-100 shadow-sm bg-black text-white">
                                        <Card.Img 
                                            variant="top" 
                                            src={imgUrl}
                                            style={{ 
                                                height: '200px', 
                                                objectFit: 'cover' 
                                            }}
                                        />
                                        <Card.Body>
                                            <Card.Title className="text-truncate">
                                                Video Title {item}
                                            </Card.Title>
                                            <Card.Text className="text-white small">
                                                This is a detailed description of the video content that might wrap to multiple lines...
                                            </Card.Text>
                                            <div className="d-flex gap-2">
                                                <Button variant="secondary" size="sm">
                                                    Song
                                                    <Download className="text-white ms-2" size={24} />
                                                </Button>
                                                <Button variant="secondary" size="sm">
                                                    Video
                                                    <Download className="text-white ms-2" size={24} />
                                                </Button>
                                            </div>
                                        </Card.Body>
                                        {/* Progress Bar */}
                                        <div className="p-2">
                                            <small className="text-white d-block mb-1">
                                                Downloading... {/* Add your message here */}
                                            </small>
                                            <div className="progress bg-dark bg-opacity-25" style={{ height: '8px' }}>
                                                <div 
                                                    className="progress-bar bg-white" 
                                                    role="progressbar" 
                                                    style={{ width: '50%' }} 
                                                    aria-valuenow={50} 
                                                    aria-valuemin={0} 
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </>
         
    );
}

export default YouZ;