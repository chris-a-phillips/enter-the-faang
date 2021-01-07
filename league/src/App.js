import React, { useState, useEffect } from 'react'
import './App.css';
import { Admin, Unit, blueUnit, redUnit, yellowUnit } from './Objects/Unit'

function App() {
	// console.log(Unit)
	// console.log(Admin)
	console.log(blueUnit);
	console.log(yellowUnit);

	const handleClick = () => {
    yellowUnit.attackUnit(redUnit);
    console.log(redUnit)
	};

	return (
		<div className='App'>
			Wassup Planet
			<button onClick={handleClick}>attack</button>
		</div>
	);
}

export default App;
