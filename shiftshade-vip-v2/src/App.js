import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePanel() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <div className="content">
        <h1>ShiftShade - Background Shifter</h1>
        <Button />
      </div>
      <AboutButton togglePanel={togglePanel} />
      <SidePanel isOpen={isOpen} togglePanel={togglePanel} />
    </div>
  );
}

function Button() {
  function handleClick() {
    window.location.href = 'https://shravanramv.github.io/EditImagePage/';
  }
  return (
    <button className="start-button" onClick={handleClick}>
      Start Now!
    </button>
  );
}

function AboutButton({ togglePanel }) {
  return (
    <button className="about-button" onClick={togglePanel}>
      About
    </button>
  );
}

function SidePanel({ isOpen, togglePanel }) {
  return (
    <>
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-content">
          <h2>This app is brought to you by:</h2>
          <h3>VIP Group 4 Members</h3>
          <ul>
            <li>Lingkeswari</li>
            <li>Shravan</li>
            <li>Kishendhra</li>
            <li>Ndiritu Collins</li>
          </ul>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={togglePanel}></div>}
    </>
  );
}

export default App;
