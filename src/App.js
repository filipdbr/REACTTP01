import './App.css';
import React from 'react';
import MonHeader from './components/MonHeader';
import MonFooter from './components/MonFooter';

function App() {

  const userName = "Dabrowski";
  const userLastName = "Filip"; 
  const sessionNr = "1";

  return (
    <div className="App">
      <MonHeader/>
      <MonFooter 
        nom = {userName} 
        prenom = {userLastName} 
        session = {sessionNr}/>
    </div>
  );
}

export default App;
