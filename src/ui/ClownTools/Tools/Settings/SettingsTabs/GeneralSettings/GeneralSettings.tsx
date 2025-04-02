import React, { createContext, useEffect, useState} from 'react';
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
import ToggleButton from 'react-bootstrap/ToggleButton'

export function GeneralSettings()
{
    const [checked, setChecked] = useState(false);
    const [stateCheck,setStateCheck] = useState(false);
    const loadHoldit = ()=>{
        let holdit = localStorage.getItem('holdit');
        console.log(holdit);
        if(!holdit){
            switch(checked)
            {
                    case false:
                        localStorage.setItem('holdit',"off");
                        break;
                    case true:
                        localStorage.setItem('holdit',"on");
                        break;
            }
            return;
        }if(holdit && !stateCheck)
        {
            setChecked(holdit==="on"?true:false);
            setStateCheck(true);
            return;
        }else{
            switch(checked)
            {
                    case false:
                        localStorage.setItem('holdit',"off");
                        break;
                    case true:
                        localStorage.setItem('holdit',"on");
                        break;
            }
        }
       // console.log(checked);

    };
    useEffect(()=>{
        loadHoldit();
    },[]);

    return(
        <>
            <Row>
                <Col xm={1} className='p-2 m-1'>
               <ToggleButton
                    id = 'holdit'
                    type="checkbox"
                    variant={checked ? 'secondary' : 'outline-secondary'}
                    checked={checked}
                    value="1"
                    onChange={(e) =>{
                        setChecked(e.currentTarget.checked);
                        loadHoldit();
                    }}
                    className="text-white"
                    >
                    {checked ? 'holdit on' : 'holdit off'}
                </ToggleButton>
                </Col>
            </Row>
        </>
    )
}