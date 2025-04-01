import { Tabs, Tab } from 'react-bootstrap';
import {useState} from 'react';
import './SettingsTabs.css';
import { GeneralSettings } from './GeneralSettings/GeneralSettings';


export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('general');
  const [selectedTool, setSelectedTool] = useState<React.ComponentType | null>(null);
  const handleTabSelect = (eventKey: string | null) => {
    
    setActiveTab(eventKey || 'general');

      switch (eventKey) {
          case 'item-0':
            setSelectedTool(()=>GeneralSettings);
              break;
          case 'item-1':
              //setSelectedTool(()=>YSync);
              break;
          case 'item-2':
              //setSelectedTool(()=>UShare);
              break;
          case 'item-3':
              //setSelectedTool(()=>Settings);
              break;
          default:
            console.log({IncalidKey:eventKey})
        }
  };
  return (
    <Tabs
      activeKey={activeTab}
      onSelect={handleTabSelect}
      className="flex-nowrap custom-tabs" // Prevents wrapping
    >
      <Tab eventKey="item-0" title="General">

      </Tab>
      <Tab eventKey="item-1" title="Tools">

      </Tab>
      <Tab eventKey="item-2" title="Account">

      </Tab>
    </Tabs>
  );
}