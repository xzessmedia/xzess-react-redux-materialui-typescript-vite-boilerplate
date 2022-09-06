import React from 'react';
import './App.css';
import reactLogo from './assets/react.svg'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/favicon.png'} className="App-logo" alt="logo" />
        <h2>
          <img src={'/logo.png'} alt="logo2" /> Boilerplate
        </h2>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
