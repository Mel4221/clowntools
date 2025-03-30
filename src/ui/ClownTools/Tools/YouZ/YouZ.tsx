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
import { SearchBar } from './SearchBar';
import { VideoCard } from './VideoCard';

 
function YouZ() {
    const[ImgUrl,setImgUrl] = useState<string>("/img.jpg");
    const[SearchBarText,setSearchBarText] = useState<string>("");
    const[VideoResolution,setVideoResolution] = useState<string>("Video");

    
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

      const handleSelect = (resolution: string | null) => {
        if (resolution) {
            setVideoResolution(resolution);
            //console.log('Selected resolution:', resolution); // You can handle the selected resolution here
        }
    };

    return (
         <>
                <Row className="p-3">
                    <Col>
                        <SearchBar 
                        text={SearchBarText} 
                        setText={setSearchBarText}/>
                    </Col>
                </Row>

                {/* Scrollable Video Grid */}
                <Row className="flex-grow-1 overflow-auto m-0 p-3">
                    <Col>
                        <VideoCard
                         url={ImgUrl}
                         onSelect={()=>{}}
                         resolution='Video'
                        />
                    </Col>
                </Row>
            </>
         
    );
}

export default YouZ;