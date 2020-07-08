import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcmone from './components/Welcome';
import Jsx from './components/Jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet />
        <Welcmone />
        <Jsx />
      </header>
    </div>
  );
}

export default App;
