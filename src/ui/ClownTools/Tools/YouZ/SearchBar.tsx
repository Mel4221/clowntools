
import { createContext, useEffect, useState  } from 'react'
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
import { SProgressBar } from './SProgressBar';
import { randomId } from '../utils/utils';

export interface SearchBarProps {
    text: string;
    setText: (text: string) => void;
}


export interface SearchState {
    active: boolean;
}
// Create a context with a default value
const defaultSearchState: SearchState = { active: false };
const SearchContext = createContext<SearchState>(defaultSearchState);

export function SearchBar(searchBar:SearchBarProps)
{
    const [loading, setLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [searchInfo,setSearchInfo] = useState("");
    
    const longRunningFunction = async (): Promise<string> => {
        // Simulate a long-running operation (e.g., fetching data)
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Operation completed!");
            setLoading(false);
          }, 60000); // 60 seconds
        });
      };
    
   





      
    return(
        <Form>
        <Form.Control 
            type="text" 
            placeholder="Search videos..." 
            className="rounded-pill"
            value={searchBar.text}
            onChange={(e)=>{
                searchBar.setText(e.target.value||'');
            }}
            onKeyDown={async (e)=>{
                if (e.key === 'Enter') {
                    
                    e.preventDefault(); // Prevent form submission if inside <form>
                    // @ts-ignore
                    let result = await electron.share(
                    {
                        type:'search-video',
                        query:'yo soy tu gominola',
                        query_id:'test'
                        /*
                        type:'search-video',
                        query:searchBar.text,
                        query_id:randomId()
                        */

                    });
                    console.log(result);
                    //handleSearch();    // Your search function
                    /*
                    console.log(searchBar.text);
                    setLoading(true);
                    const interval = setInterval(()=>{
                        setProgress((prev) => (prev >= 100 ? 0 : prev + 10)); // Increment progress
                        if(!loading){
                            clearInterval(interval);
                        }
                    },600);
                    try{
                    const result = await longRunningFunction();
                    clearInterval(interval);

                    }catch{
                    console.log("Error while searching video...")
                        clearInterval(interval);
                    }
                    //setResult(result);
                    */
                }
            }}
        />
            <SProgressBar
                progress={progress}
                info={searchInfo}
            />
    </Form>
    )
}