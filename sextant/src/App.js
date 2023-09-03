import React from 'react';
import PublicIPDisplay from './PublicIPDisplay'; // Import the PublicIPDisplay component
import Banner from './Banner'; // Import your container components (if you have them)
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      {/* Other components and content */}
      <Banner> {/* Wrap in a container component */}
        <PublicIPDisplay ipType="IPv4" />
      </Banner>
      <Exhibit> {/* Wrap in another container component */}
        <PublicIPDisplay ipType="IPv6" />
      </Exhibit>
      {/* Other components and content */}
    </div>
  );
}

export default App;
