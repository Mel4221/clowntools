import { Tabs, Tab, Container } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import './SettingsTabs.css';
import { GeneralSettings } from './GeneralSettings/GeneralSettings';
import ToolsDisplay from '../../../ToolsDisplay';
import { ToolsSettings } from './ToolsSettings/ToolsSettings';
import { OtherSettings } from './OtherSettings/OtherSettings';
 
export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('general');
  const [selectedTool, setSelectedTool] = useState<React.ComponentType | null>(null);
  const handleTabSelect = (eventKey: string | null) => {
    



    setActiveTab(eventKey || 'general');
        //console.log(eventKey);
      switch (eventKey) {
          case 'item-0':
            console.log(eventKey);
            setSelectedTool(()=>GeneralSettings);
              break;
          case 'item-1':
            setSelectedTool(()=>ToolsSettings);
              break;
          case 'item-2':
              setSelectedTool(()=>OtherSettings);
              break;
          default:
            setSelectedTool(null);
            console.log({IncalidKey:eventKey})
        }
  };


  
  return (
    <Container>
        <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        className="flex-nowrap custom-tabs" // Prevents wrapping
        >
        <Tab eventKey="item-0" title="General">

        </Tab>
        <Tab eventKey="item-1" title="Tools">

        </Tab>
        <Tab eventKey="item-2" title="Other">

        </Tab>
        </Tabs>
        <ToolsDisplay Tool={selectedTool}/>
    </Container>
  );
}