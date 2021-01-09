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

	generateRandomUnit(basicUnits, 'basic');
	generateRandomUnit(advancedUnits, 'advanced');
	generateRandomUnit(eliteUnits, 'elite');

  console.log(unitPool);
  
  // console.log(BasicFaang)

  const me = new BasicFaang(unitPool.basicUnits[0].type,)
  
  const activeUnits = [me]
  console.log(activeUnits)

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
