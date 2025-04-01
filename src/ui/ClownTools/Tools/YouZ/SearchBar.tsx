
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
    setSearchBuffer:(buffer:Array<any>)=>void;
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
    const [taskCount, setTaskCount] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [searchInfo,setSearchInfo] = useState<string>("");
    const [item_ghost,setItemGhost] = useState<any>();
    const max_task = 8;
    let count = 0; 
    let dots = '.';
    let items =[{

    }];   
 
    const getDots = ()=>{
        switch(dots)
        {
            case '.':
                dots = '..';
            break;
            case '..':
                dots = '...';
            break;
            default:
                dots = '.';
            break;
        }

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
                    //setProgress(50);
                    e.preventDefault(); // Prevent form submission if inside <form>
                    //localStorage.setItem('myKey', 'myValue');

                    const dots_interval = setInterval(()=>{
                        //count++; 
                        getDots();
                        setSearchInfo(`Searching${dots}`);
                        //setProgress((count/max_task)*100);
                       
                    },400);
                    const interval = setInterval(()=>{
                        count++; 
                        getDots();
                        setSearchInfo(`Searching${dots}`);
                        setProgress((count/max_task)*100);
                        //console.log(taskCount);
                        if(count > max_task){
                            clearInterval(interval);
                            clearInterval(dots_interval);
                            setProgress(0);
                            setSearchInfo('');

                        }
                    },4000);
                    
                    
                  //  setLoading(true);
                    
                    // @ts-ignore
                    let result = await electron.share(
                    {
                      
                        type:'search-video',
                        query:searchBar.text,
                        query_id:randomId()
                    });

             
                    let test = await new Promise<void>(async()=>
                    {
                       // setTaskCount(taskCount+1);

                        await result.message.forEach(async(item:any)=>
                        {
                            const id = randomId();
                            // @ts-ignore
                            let resolution = await electron.share({
                                type:'get-resolution',
                                query:item.url,
                                query_id:id
                            })
                             //   setProgress((taskCount/max_task)*100);

                            items.push({
                                title:item.title,
                                uploader:item.uploader,
                                id:item.id,
                                resolution:resolution.message,
                                thumbnails:item.thumbnails,
                                duration:item.duration,
                                duration_string:item.duration_string,
                                url:item.url
                            });
                            
                            console.log(items);
                            searchBar.setSearchBuffer(items);
                            console.log({max_task,taskCount})
                           // setItemGhost

                        });

                    });
                    console.log(test);
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