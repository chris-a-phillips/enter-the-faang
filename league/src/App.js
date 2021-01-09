import React, { useState, useEffect } from 'react'
import './App.css';
import { Admin, Unit, blueUnit, redUnit, yaboi } from './Classes/Unit'
import { rounds } from './Classes/Turn'
import { crew, advanced, elite } from './Classes/EnemyFaangs'

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
  
  console.log(crew)
  console.log(advanced)
  console.log(elite)


	return (
		<div className='App'>
			Wassup Planet
			<button onClick={() => attack(blueUnit.attackUnit(redUnit), redUnit)}>blue attack red</button>
			<button onClick={() => attack(yaboi.team[1].attackUnit(yaboi.team[0]), yaboi.team[0])}>red attack blue</button>

      <button>{yaboi.team[1].name} attack {yaboi.team[0].name}</button>

      <button onClick={addNumber}>add turn</button>
      <p>{JSON.stringify(yaboi.team)}</p>

      {yaboi.team.map((piece) => {
        return (
          <div key={piece.name}>
            <p>{piece.name}</p>
            <p>{piece.health}</p>
          </div>
        )
      })}
		</div>
	);
}

export default App;
