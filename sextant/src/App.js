
import './App.css';

// Banner Component
function Banner() {
  return (
    <div className="Banner">
      <h1>My Site Title</h1>
    </div>
  );
}

// Exhibit Component
function Exhibit({ children }) {
  return (
    <div className="Exhibit">
      {children}
    </div>
  );
}

// App Component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner /> {/* Display the Banner component */}
      </header>
      <Exhibit>
        {/* Add other components inside the Exhibit component */}
      </Exhibit>
    </div>
  );
}

export default App;
