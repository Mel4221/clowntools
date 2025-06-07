
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

 
export function CardsButtons(props: {items:any,url:any}) {
    const [VideoResolution, setVideoResolution] = useState<string>('Video');

    const handleSelect = (eventKey: string | null) => {
        
        if (eventKey) {
            const selected = props.items.find((res: any) => res.label === eventKey);
            if (selected) {
                setVideoResolution(`${selected.label}p`);
            }
        }
    
    };
    //console.log({"resolutions:":props.items})
    let items = props.items || []
    return (
        <>
        <div className="d-flex gap-2">
            <Button variant="secondary" size="sm">
                Song
                <Download className="text-white ms-2" size={24} />
            </Button>
            <Dropdown onSelect={handleSelect}>
                
                
                <Dropdown.Toggle as={Button} variant="secondary" size="sm">
                    {VideoResolution}
                    <Download className="text-white ms-2" size={24} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {items.map((resolution: any) => (
                        <Dropdown.Item 
                            key={resolution.format+resolution.label+'p'}
                            href={resolution.format} 
                            eventKey={resolution.label}
                            as="button"
                            onClick={(e) => e.preventDefault()}
                        >
                            {resolution.label}p
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            
        </div>

        </>
        
    )
}