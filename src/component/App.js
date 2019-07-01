import React from 'react';
import Countdown from "./Countdown";
import './App.css';

let nextYear = new Date(new Date(0, 0, 1).setFullYear(new Date().getFullYear() + 1))
Countdown.defaultProps = {
  'dateTo': { year: nextYear.getFullYear(), month: nextYear.getMonth(), date: nextYear.getDay() }
}

function App() {
  return (
    <div className="component-app">
      <Countdown />
    </div>
  );
}

export default App;
