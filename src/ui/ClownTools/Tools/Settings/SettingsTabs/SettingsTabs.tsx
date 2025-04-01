import { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Gear, Person, Tools, BoxArrowRight } from 'react-bootstrap-icons';

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div>
      {/* Horizontal Navigation Bar */}
      <Navbar expand="lg" className="px-3 bg-dark text-white">
        <Navbar.Brand className="me-4 text-white">
          <Gear className="me-2" />
          General
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            activeKey={activeTab}
            onSelect={(selectedKey) => setActiveTab(selectedKey || 'general')}
            className="me-auto"
          >
            <Nav.Link eventKey="general" className="d-flex align-items-center px-3 text-white">
              <Person className="me-2" />
              Other
            </Nav.Link>
            <Nav.Link eventKey="tools" className="d-flex align-items-center px-3 text-white">
              <Tools className="me-2" />
              Tools
            </Nav.Link>
            <Nav.Link eventKey="account" className="d-flex align-items-center px-3 text-white">
              <Person className="me-2" />
              Account
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey="logout" className="d-flex align-items-center text-danger px-3 text-white">
              <BoxArrowRight className="me-2" />
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Content Area - Added margin-top to account for fixed navbar */}
      <Container fluid className="mt-5 p-4">
        {activeTab === 'general' && (
          <div>
            <h2>General Settings</h2>
            {/* General settings content here */}
          </div>
        )}
        {activeTab === 'tools' && (
          <div>
            <h2>Tools Settings</h2>
            {/* Tools settings content here */}
          </div>
        )}
        {activeTab === 'account' && (
          <div>
            <h2>Account Settings</h2>
            {/* Account settings content here */}
          </div>
        )}
      </Container>
    </div>
  );
}