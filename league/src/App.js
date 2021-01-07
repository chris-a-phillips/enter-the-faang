import React, { useState, useEffect } from 'react'
import './App.css';
import { Admin, Unit, blueUnit, redUnit, yellowUnit } from './Classes/Unit'

function App() {
	// console.log(Unit)
	// console.log(Admin)
	// console.log(blueUnit);
	// console.log(yellowUnit);

	const handleClick = () => {
    yellowUnit.attackUnit(redUnit);
    console.log(redUnit)
  };
  
  const attack = (yellowUnit, blueUnit) => {
    console.log(yellowUnit)
    console.log(blueUnit)
  }

	return (
		<div className='App'>
			Wassup Planet
			<button onClick={handleClick}>blue attack red</button>
			<button onClick={handleClick}>red attack blue</button>
			<button onClick={() => attack(yellowUnit, blueUnit)}>yellow attack blue</button>
		</div>
	);
}

export default App;
