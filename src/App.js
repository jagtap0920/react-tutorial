import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcmone from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet />
        <Welcmone />
      </header>
    </div>
  );
}

export default App;
