import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wellyson from './Wellyson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu projeto em React
        </p>
        <Wellyson />
      </header>
    </div>
  );
}

export default App;
