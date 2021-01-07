import React, { useState, useEffect } from 'react'
// import { AppH1, AppWrapper, TestBox } from './SCApp'
import { Unit, blueUnit, redUnit } from './Objects/Unit'
import './App.css';

function App() {
  // const primaryColor = 'red'
  console.log(Unit)
  
  const handleClick = () => {
    blueUnit.attack(redUnit)
    console.log(redUnit)
  }


  return (
    <div className="App">
      {/* Wassup Planet
      <button onClick={handleClick}>attack</button> */}

      {/* <AppWrapper>
        content
      </AppWrapper>
      <AppH1>styled heading</AppH1>
      <h1>styled heading</h1>
      <TestBox primaryColor={primaryColor}>
        test box
      </TestBox> */}
    </div>
  );
}

export default App;
