import React from 'react';
import Countdown from "./Countdown";
import './App.css';

function App() {
  return (
    <div className="component-app">
      <Countdown dateTo={{ year: 2019, month: 6, date: 2 }}/>
    </div>
  );
}

export default App;
