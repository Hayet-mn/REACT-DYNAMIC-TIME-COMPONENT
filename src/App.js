import React from 'react';
import "./App.css";







function App() {
  const ms=7100200;
    const milliseconds = ms % 1000;
    const ms1 = Math.floor((ms - milliseconds) / 1000);
    const seconds = ms1 % 60;
    const ms2 = Math.floor((ms1 - seconds) / 60);
    const minutes = ms2 % 60;
    const hours = Math.floor((ms2 - minutes) / 60);
    
  return (  
  <div className="time">
    <h1>{String(hours).padStart(2,'0')} :{String(minutes).padStart(2,'0')} :
{String(seconds).padStart(2,'0')} </h1>
  </div>

  );
  
}






   
  


export default App;