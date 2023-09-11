

export default PacketLatencyDisplay;
import React, { useState, useEffect } from 'react';

function PacketLatencyDisplay() {
  const [latency, setLatency] = useState(null); // State to hold the packet latency
  const wsUrl = 'ws://localhost:55455'; // WebSocket server address

  useEffect(() => {
    // Create a new WebSocket instance
    const ws = new WebSocket(wsUrl);

    // Set up event listeners for handling messages
    ws.addEventListener('message', (event) => {
      // Extract the timestamp from the message and calculate latency
      const packetTimestamp = parseInt(event.data, 10);
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;

      // Update the state with the calculated latency
      setLatency(packetLatency);
    });

    // Cleanup the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, [wsUrl]);

  // JSX to display packet latency
  return (
    <div>
      <h2>Packet Latency</h2>
      <p>Latency: {latency !== null ? `${latency} ms` : 'Waiting for data...'}</p>
    </div>
  );
}


      
   