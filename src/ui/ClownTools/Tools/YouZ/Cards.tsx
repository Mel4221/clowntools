
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
import { CardsPogressBar } from './CardsProgressBar';
import { CardsButtons } from './CardsButtons';
import { useCardsState } from './CardsContext';


export interface CardsProps {
    items:Array<any>;
    
}

export function Cards(cardsGroup: CardsProps) {
    const [message, setMessage] = useState<string>('Downloading...');
    const [porcent, setPorcent] = useState<string>('50%');
    const {cardsState,setCardsState} = useCardsState();

    let items = cardsGroup.items || [];

    return (
        <>
           {items.map((item) => (
                
                item.id ? (
                    <Col key={item.id}>
                        <Card className="h-100 shadow-sm bg-black text-white">
                            <Card.Img
                                variant="top"
                                src={item.thumbnails?.[1]?.url || item.thumbnails?.[0]?.url || null}
                                style={{
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <Card.Body>
                                <Card.Title className="text-truncate">
                                    {item.title}
                                </Card.Title>
                                <Card.Text className="text-white small">
                                    {item.uploader}
                                </Card.Text>
                                <CardsButtons
                                    items={item.resolution}
                                    url={item.url}
                                />                              
                            </Card.Body>

                            <CardsPogressBar porcent={porcent} message={message} />
                        </Card>
                    </Col>
                ) : null    
            ))}

        </>
    );
}

 
/*
 {items.map((item) => (
                item.id ? (
                    <Col key={item.id}>
                        <Card className="h-100 shadow-sm bg-black text-white">
                            <Card.Img
                                variant="top"
                                src={item.thumbnails?.[1]?.url || item.thumbnails?.[0]?.url || null}
                                style={{
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <Card.Body>
                                <Card.Title className="text-truncate">
                                    {item.title}
                                </Card.Title>
                                <Card.Text className="text-white small">
                                    {item.uploader}
                                </Card.Text>
                                <CardsButtons
                                    items={item.resolution}
                                    url={item.url}
                                />                              
                            </Card.Body>

                            <CardsPogressBar porcent={porcent} message={message} />
                        </Card>
                    </Col>
                ) : null
            ))}

*/