import React, { useState } from 'react';
import './App.css';
import { blueUnit, redUnit, yaboi } from './Classes/Unit';
import { rounds } from './Classes/Turn';
import { basic, advanced, elite, BasicFaang } from './Classes/EnemyFaangs';
import { ranks, specialRanks, faang } from './Classes/FaangStats';

function App() {
	const attack = (attacker, defender) => {
		console.log(attacker);
		console.log(defender);
	};

	const addNumber = () => {
		rounds.takeTurn();
		console.log(rounds);
	};

	// console.log(basic)
	// console.log(advanced)
	// console.log(elite)
	let basicUnits = faang.basic;
	let advancedUnits = faang.advanced;
	let eliteUnits = faang.elite;
	console.log(basicUnits);
	console.log(advancedUnits);
	console.log(eliteUnits);

	function generateRandomUnit(rank, string) {
		let length = Object.keys(rank).length;
		let randomNumber = Math.floor(Math.random() * length);
		let randomUnit = rank[Object.keys(rank)[randomNumber]];

    if (string === 'basic') {
      unitPool.basicUnits.push(randomUnit)
    } else if (string === 'advanced') {
      unitPool.advancedUnits.push(randomUnit)
    } else {
      unitPool.eliteUnits.push(randomUnit)
    }

		console.log(randomUnit);
		// unitArray.push(randomUnit);
	}

	let unitPool = {
    basicUnits: [],
    advancedUnits: [],
    eliteUnits: []
  };

  let easy = [70, 95]
  let normal = [60, 90]
  let difficult = [40, 70]
  let insane = [20, 50]

let difficulty = easy
let armySize = 5

  for (let i = 0; i < armySize; i++) {
    let percentChance = Math.floor(Math.random() * 100)
    if (percentChance < difficulty[0]) {
      generateRandomUnit(basicUnits, 'basic')
    } else if(percentChance < difficulty[1]) {
      generateRandomUnit(advancedUnits, 'advanced')
    } else {
      generateRandomUnit(eliteUnits, 'elite')
    }
  }

  
	// generateRandomUnit(basicUnits, 'basic');
	// generateRandomUnit(advancedUnits, 'advanced');
	// generateRandomUnit(eliteUnits, 'elite');
  
  console.log(unitPool);
  
  // console.log(BasicFaang)
  
  const me = new BasicFaang(unitPool.basicUnits[0].type,)
  const me2 = new BasicFaang(unitPool.basicUnits[1].type,)
  
  const activeUnits = [me,me2]
  console.log(activeUnits)

  // console.log(Math.floor(Math.random() * 10))
  
	return (
		<div className='App'>
			Wassup Planet
			<button
				onClick={() => attack(blueUnit.attackUnit(redUnit), redUnit)}>
				blue attack red
			</button>
			<button
				onClick={() =>
					attack(
						yaboi.team[1].attackUnit(yaboi.team[0]),
						yaboi.team[0]
					)
				}>
				red attack blue
			</button>
			<button>
				{yaboi.team[1].name} attack {yaboi.team[0].name}
			</button>
			<button onClick={addNumber}>add turn</button>
			<p>{JSON.stringify(yaboi.team)}</p>
			{yaboi.team.map((piece) => {
				return (
					<div key={piece.name}>
						<p>{piece.name}</p>
						<p>{piece.health}</p>
					</div>
				);
			})}
			<code>{JSON.stringify(faang)}</code>
		</div>
	);
}

export default App;
