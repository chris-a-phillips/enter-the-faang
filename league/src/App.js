import React, { useState } from 'react';
import './App.css';
import { blueUnit, redUnit, yaboi } from './Classes/Unit';
import { rounds } from './Classes/Turn';
import { basic, advanced, elite, BasicFaang, AdvancedFaang, EliteFaang } from './Classes/EnemyFaangs';
import { pedigree, faang, randomNames } from './Classes/FaangStats';

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
	// console.log(basicUnits);
	// console.log(advancedUnits);
	// console.log(eliteUnits);

  // RANDOM UNIT GENERATOR THAT PUSHES THE UNITS INTO THE UNIT POOL
	function generateRandomUnit(rank) {
		let length = Object.keys(rank).length;
    let randomNumber = Math.floor(Math.random() * length);
		let randomUnit = rank[Object.keys(rank)[randomNumber]];
    let percentChance = Math.floor(Math.random() * 100);
    randomUnit.name = randomNames[Math.floor(Math.random() * randomNames.length)]

		if (rank.dra.rank === 'Basic') {
			if (percentChance <= 95) {
				randomUnit.pedigree =
          pedigree.commonLevelOne[Math.floor(Math.random() * pedigree.commonLevelOne.length)];
        } else {
          randomUnit.pedigree =
				pedigree.specialLevelOne[
					Math.floor(Math.random() * pedigree.specialLevelOne.length)
				];
			}
			unitPool.push(
				new BasicFaang(
					randomUnit.name,
					randomUnit.health,
					randomUnit.attack,
					randomUnit.defense,
					randomUnit.regeneration,
					randomUnit.speed,
					randomUnit.rank,
          randomUnit.pedigree,
          randomUnit.species
				)
			);
		} else if (rank.dra.rank === 'Advanced') {
			if (percentChance <= 95) {
				randomUnit.pedigree =
					pedigree.commonLevelTwo[
						Math.floor(
							Math.random() * pedigree.commonLevelTwo.length
						)
					];
			} else {
				randomUnit.pedigree =
					pedigree.specialLevelTwo[
						Math.floor(
							Math.random() * pedigree.specialLevelTwo.length
						)
					];
			}
			unitPool.push(
				new AdvancedFaang(
					randomUnit.name,
					randomUnit.health,
					randomUnit.attack,
					randomUnit.defense,
					randomUnit.regeneration,
					randomUnit.speed,
					randomUnit.rank,
          randomUnit.pedigree,
          randomUnit.species
				)
			);
		} else {
			if (percentChance <= 95) {
				randomUnit.pedigree =
					pedigree.commonLevelThree[
						Math.floor(
							Math.random() * pedigree.commonLevelThree.length
						)
					];
			} else {
				randomUnit.pedigree =
					pedigree.specialLevelThree[
						Math.floor(
							Math.random() * pedigree.specialLevelThree.length
						)
					];
			}
			unitPool.push(
				new EliteFaang(
					randomUnit.name,
					randomUnit.health,
					randomUnit.attack,
					randomUnit.defense,
					randomUnit.regeneration,
					randomUnit.speed,
					randomUnit.rank,
          randomUnit.pedigree,
          randomUnit.species
				)
			);
		}
		}

  // UNIT POOL FOR ALL OF THE UNITS TO GET PUSHED INTO FROM THE RANDOM UNIT GENERATOR
	let unitPool = [];

	// PLAYER GAME SETTINGS
	let easy = [70, 95];
	let normal = [60, 90];
	let difficult = [40, 70];
	let insane = [20, 50];

	let difficulty = easy;
	let armySize = 50;
  
	for (let i = 0; i < armySize; i++) {
    let percentChance = Math.floor(Math.random() * 100);
		if (percentChance < difficulty[0]) {
      generateRandomUnit(basicUnits);
		} else if (percentChance < difficulty[1]) {
      generateRandomUnit(advancedUnits);
		} else {
      generateRandomUnit(eliteUnits);
		}
  }
  
  console.log(unitPool);

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
			<code>{JSON.stringify(unitPool)}</code>
		</div>
	);
}

export default App;
