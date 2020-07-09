import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcmone from './components/Welcome';
import Jsx from './components/Jsx';
import LearnPropsFunctionalComponents from './components/04-LearnPropsFunctionalComponents';
import LearnPropsClassComponents from './components/04-LearnPropsClassComponents';
import LearnStateManagementComponent from './components/05-LearnStateManagementComponent';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="App-body">
        <hr />

        <Greet />
        <hr />

        <Welcmone />
        <hr />

        <Jsx />
        <hr />

        <LearnPropsFunctionalComponents name='Tushar' country='Pune, India'>
          <p>This is pros child content from functional components!!!</p>
        </LearnPropsFunctionalComponents>
        <hr />

        <LearnPropsClassComponents name='Sagar' country='Veghal, Netherlands'>
          <p>This is pros child content from class components!!!</p>
        </LearnPropsClassComponents>
        <hr />

        <LearnStateManagementComponent />
        <hr />
        
      </div>
    </div>
  );
}

export default App;
