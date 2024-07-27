import './App.css';
import React from 'react';
import MaDate from './components/MaDate';
import Horloge from './components/Horloge';

function App() {
  return (
    <div className="App">
      <h1><MaDate/><Horloge/></h1>
      <h2>Chrono</h2>
      <button>Start</button>
      <button>Pause</button>
      <button>Stop</button>
      <button>Restart</button>
    </div>
  );
}

export default App;
