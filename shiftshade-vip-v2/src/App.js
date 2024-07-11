import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>ShiftShade - Background Shifter</h1>
        <Button />
      </div>
    </div>
  );
}

function Button() {
  function handleClick() {
    window.location.href = 'https://www.google.com';
  }
  return (
    <button className="start-button" onClick={handleClick}>
      Start Now!
    </button>
  );
}


export default App;
