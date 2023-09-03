import React, { useState, useEffect } from 'react';
import './PublicIPDisplay.css'; // Import the CSS file

function PublicIPDisplay({ ipType }) {
  const [publicIP, setPublicIP] = useState('');

  useEffect(() => {
    // Define the URL for the ipify API based on the ipType prop
    const apiUrl = `https://api.ipify.org?format=json&${ipType.toLowerCase()}`;

    // Make the HTTP request using the fetch API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the publicIP state variable with the fetched IP address
        setPublicIP(data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP:', error);
      });
  }, [ipType]);

  return (
    <div className="public-ip-container">
      <h2 className="public-ip-title">Public {ipType.toUpperCase()} Address</h2>
      <p className="public-ip-value">{publicIP}</p>
    </div>
  );
}

export default PublicIPDisplay;
