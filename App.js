import React from 'react';
import './App.css'; // Import your CSS if you have one
import PacketLatencyDisplay from './PacketLatencyDisplay'; // Import the PacketLatencyDisplay component
import IPAddress from './IPAddress'; // Import the IPAddress component

function App() {
  return (
    <div className="App">
      {/* Other components and content */}
      <PacketLatencyDisplay /> {/* Use the PacketLatencyDisplay component here */}
      <IPAddress /> {/* Use the IPAddress component here */}
    </div>
  );
}

export default App;
