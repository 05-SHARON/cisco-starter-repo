import React from 'react';
import PacketLatencyDisplay from './PacketLatencyDisplay';
import PublicIPDisplay from './PublicIPDisplay';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>Welcome to Sextant</h1>
      </header>

      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* Packet Latency Display */}
        <PacketLatencyDisplay />

        {/* Public IP Display */}
        <Banner>
          <PublicIPDisplay ipType="IPv4" />
        </Banner>

        <Exhibit>
          <PublicIPDisplay ipType="IPv6" />
        </Exhibit>

        {/* Other content goes here */}
        <div>
          <h2>Other Content</h2>
          <p>This is some sample content in your Sextant application.</p>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Sextant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
