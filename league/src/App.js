import React, { useState, useEffect } from 'react'
import './App.css';
import { Admin, Unit, blueUnit, redUnit, yellowUnit, yaboi } from './Classes/Unit'
import { Turn, rounds } from './Classes/Turn'

function App() {
  console.log(yaboi.team[2].attackUnit(redUnit))  
  const attack = (attacker, defender) => {
    console.log(attacker)
    console.log(defender)
  }

  const addNumber = () => {
    rounds.takeTurn()
    console.log(rounds)
  }
  

	return (
		<div className='App'>
			Wassup Planet
			<button onClick={() => attack(blueUnit.attackUnit(redUnit), redUnit)}>blue attack red</button>
      <button onClick={addNumber}>add turn</button>
      <p>{JSON.stringify(yaboi.team)}</p>

      {yaboi.team.map((piece) => {
        return (
          <div>
            <p>{piece.name}</p>
            <p>{piece.health}</p>
          </div>
        )
      })}
		</div>
	);
}

export default App;
