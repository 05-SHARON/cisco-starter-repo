

import React, { useState, useEffect } from 'react';

function IPAddress() {
  const [ipAddress, setIPAddress] = useState('Loading...');

  useEffect(() => {
    // Make an HTTP request to the ipify API
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved IP address in the state
        setIPAddress(data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  return (
    <div>
      <h2>Your Public IP Address</h2>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IPAddress;
