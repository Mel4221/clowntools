
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
import Label from 'react-bootstrap/FormLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import { Download } from 'react-bootstrap-icons';


export interface VideoCardProps {
    url: string;
    resolution:string;
    onSelect: (text: string)=>void;
}
export function VideoCard(videoCard:VideoCardProps)
{
    return(
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                            {/* Video Items - Use map in real application */}
                            {[1,2,3,4].map((item) => (
                                
                                <Col key={item}>
                                    <Card className="h-100 shadow-sm bg-black text-white">
                                        <Card.Img 
                                            variant="top" 
                                            src={videoCard.url}
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
                                                <Dropdown onSelect={()=>videoCard.onSelect}>
                                                    <Dropdown.Toggle as={Button} variant="secondary" size="sm">
                                                        {videoCard.resolution}
                                                        <Download className="text-white ms-2" size={24} />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="1080p" as="button">1080p</Dropdown.Item>
                                                        <Dropdown.Item href="720p" as="button">720p</Dropdown.Item>
                                                        <Dropdown.Item href="480p" as="button">480p</Dropdown.Item>
                                                        <Dropdown.Item href="360p" as="button">360p</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
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
    );
}