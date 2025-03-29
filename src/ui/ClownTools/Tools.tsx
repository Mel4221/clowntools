import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import ToolsDisplay from './ToolsDisplay';
import YouZ from './Tools/YouZ/YouZ'; 
import YSync from './Tools/YSync/YSync'; 
import UShare from './Tools/UShare/UShare';  
import Settings from './Tools/Settings/Settings'; 
import './Tools.css';
import { NavItem, NavLink } from 'react-bootstrap'



function Tools() {
    const [selectedTool, setSelectedTool] = useState<React.ComponentType | null>(null);
    const handleTabSelect = (eventKey: string | null) => {
        switch (eventKey) {
            case 'item-1':
                setSelectedTool(()=>YouZ);
                break;
            case 'item-2':
                setSelectedTool(()=>YSync);
                break;
            case 'item-3':
                setSelectedTool(()=>UShare);
                break;
            case 'item-4':
                setSelectedTool(()=>Settings);
                break;
            default:
                setSelectedTool(null);
        }
    };
    return (
        <Row className='border border-white border-2 rounded p-3 flex-grow-0'>

            <Col sm='2' className='border border-white border-2 rounded p-3 m-0'>
                <Row className='p-1 m-1' style={{ textAlign: 'center', margin: '10px', padding: '2px' }}>
                    <label><strong>ClownTools</strong></label>
                </Row>
                
                <Tabs
                    className='flex-column nav-fill selected-none'
                    style={{ borderBottom: 'none' }}
                    onSelect={handleTabSelect}
                >
                    <Tab        
                        eventKey="item-0"
                        title="Home"
                        tabClassName="text-white"
                        
                    />
                    <Tab 
                        eventKey="item-1"
                        title="YouZ"
                        tabClassName="text-white"
                    />
                    <Tab 
                        eventKey="item-2"
                        title="YSync"
                        tabClassName="text-white"
                    />
                    <Tab
                        eventKey="item-3"
                        title="UShare"
                        tabClassName="text-white"
                    />
                    <Tab
                        eventKey="item-4"
                        title="Settings"
                        tabClassName="text-white"
                    />
                </Tabs>
            </Col>

             <ToolsDisplay Tool={selectedTool} />
        </Row>
    );
}

export default Tools;
