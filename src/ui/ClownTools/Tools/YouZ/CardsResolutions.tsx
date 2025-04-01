

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


export function CardsResolutions()
{
    return(
        <>
            <Dropdown.Item href="1080p" as="button">1080p</Dropdown.Item>
            <Dropdown.Item href="720p" as="button">720p</Dropdown.Item>
            <Dropdown.Item href="480p" as="button">480p</Dropdown.Item>
            <Dropdown.Item href="360p" as="button">360p</Dropdown.Item>
        </>
    )
}