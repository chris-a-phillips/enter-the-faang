import React, { useState } from 'react';
import './App.css';
import { blueUnit, redUnit, yaboi } from './Data/Unit';
import { rounds } from './Data/Turn';
import EnemyFaangs from './components/EnemyFaangs';


function App() {
  const [difficulty, setDifficulty] = useState()
  const [armySize, setArmySize] = useState()
  const [enemyUnits, setEnemyUnits] = useState()
  const [gameStarted, setGameStarted] = useState()

	const attack = (attacker, defender) => {
		console.log(attacker);
		console.log(defender);
	};

	const addNumber = () => {
		rounds.takeTurn();
		console.log(rounds);
  };

	return (
		<div className='App'>
			Wassup Planet
      <br />

      <div>Choose Difficulty
        <button onClick={() => setDifficulty('easy')}>Easy</button>
        <button onClick={() => setDifficulty('normal')}>Normal</button>
        <button onClick={() => setDifficulty('veteran')}>Veteran</button>
        <button onClick={() => setDifficulty('insane')}>Insane</button>
      </div>
      <div>Choose Army Size
        <button onClick={() => setArmySize(10)}>10</button>
        <button onClick={() => setArmySize(20)}>20</button>
        <button onClick={() => setArmySize(50)}>50</button>
        <button onClick={() => setArmySize(100)}>100</button>
      </div>
<br />

{ enemyUnits ? (
<button onClick={() => setGameStarted(true)}>Start Game</button>
) : null}

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
			<code>{JSON.stringify(enemyUnits)}</code>

      { difficulty && armySize ? (
        <EnemyFaangs difficulty={difficulty} armySize={armySize} setEnemyUnits={setEnemyUnits}/>
        ) : null}
		</div>
	);
}

export default App;
