import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Career from './Career';  // Import the Career component from career.js

function Sidebar() {
  const [key, setKey] = useState('career');

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="flex-column">
          <Tab eventKey="career" title="Career Path">
            {/* No buttons here, as per request */}
          </Tab>
          <Tab eventKey="jobs" title="Jobs Path">
            {/* Placeholder for job path tab content */}
            <div>Job Path Content</div>
          </Tab>
        </Tabs>
      </div>

      {/* Main content area (this will show the career content when the 'career' tab is clicked) */}
      {/* <div className="content-area p-3" style={{ flex: 1 }}>
        {key === 'career' && <Career />} Conditionally render Career component
      </div> */}
    </div>
  );
}

export default Sidebar;
