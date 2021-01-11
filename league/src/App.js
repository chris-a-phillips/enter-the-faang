import React, { useState } from 'react';
import './App.css';
import { blueUnit, redUnit, yaboi } from './Data/Unit';
import { rounds } from './Data/Turn';
import EnemyFaangs from './Data/EnemyUnits';
import { Link, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './Pages/WelcomeScreen/WelcomeScreen';
import PlayerUnits from './Data/PlayerUnits';
import PlayerKingdoms from './Data/PlayerKingdoms';
import GameBoard from './Pages/GameBoard/GameBoard';

function App() {
	const [difficulty, setDifficulty] = useState();
	const [armySize, setArmySize] = useState();
	const [enemyUnits, setEnemyUnits] = useState();
	const [gameStarted, setGameStarted] = useState();
	const [trueSkill, setTrueSkill] = useState()
	const [playerTeam, setPlayerTeam] = useState()
	const [playerKingdoms, setPlayerKingdoms] = useState()

	const attack = (attacker, defender) => {
		console.log(attacker);
		console.log(defender);
	};

	const addNumber = () => {
		rounds.takeTurn();
		console.log(rounds);
	};

	console.log(enemyUnits)
	console.log(playerTeam)
	console.log(playerKingdoms)

	return (
		<div className='App'>
			<Link to='/'>Home</Link>
			<br />
			{ !gameStarted ? (
				<WelcomeScreen
					setDifficulty={setDifficulty}
					setArmySize={setArmySize}
					setTrueSkill={setTrueSkill}
					setGameStarted={setGameStarted}
					enemyUnits={enemyUnits}
				/>
			) : (	
				<GameBoard enemyUnits={enemyUnits} playerTeam={playerTeam} playerKingdoms={playerKingdoms}/>
				) }
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
			{/* <code>{JSON.stringify(enemyUnits)}</code> */}
			{ difficulty && armySize && playerTeam
			// && trueSkill 
			? (
				<>
				<EnemyFaangs
					difficulty={difficulty}
					armySize={armySize}
					setEnemyUnits={setEnemyUnits}
				/>
				</>
				) : null }
				<PlayerUnits trueSkill={trueSkill} setPlayerTeam={setPlayerTeam}/>
				{ playerTeam ? (
				<PlayerKingdoms setPlayerKingdoms={setPlayerKingdoms} playerTeam={playerTeam}/>
				) : null }
				
		</div>
	);
}

export default App;
