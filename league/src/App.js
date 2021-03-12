import React, { useState, useMemo } from 'react';
import './App.css';
import { session } from './Data/SessionLogic';
import EnemyFaangs from './Data/EnemyUnits';
// import { Link, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './Pages/WelcomeScreen/WelcomeScreen';
import PlayerUnits from './Data/PlayerUnits';
import PlayerKingdoms from './Data/PlayerKingdoms';
import GameBoard from './Pages/GameBoard/GameBoard';
import { GameContext } from './components/GameContext'
import { AppWrapper } from './SCApp';


function App() {
	// DEFAULTS ARE FOR TESTING PURPOSES
	// ALL STATE HOOKS SHOULD BE EMPTY
	const [difficulty, setDifficulty] = useState('veteran');
	const [armySize, setArmySize] = useState(20);
	const [enemyUnits, setEnemyUnits] = useState([]);
	const [gameStarted, setGameStarted] = useState(false);
	const [trueSkill, setTrueSkill] = useState()
	const [playerTeam, setPlayerTeam] = useState()
	const [playerKingdoms, setPlayerKingdoms] = useState([])
	const [involved, setInvolved] = useState({
		initiator: '',
		possibleTargets: [],
		selectedTarget: '',
		card: '',
		action: false,
	});
	const [allUnitsOnField, setAllUnitsOnField] = useState([])
	const value = useMemo(() => ({involved, setInvolved}), [involved, setInvolved])

	return (
		<AppWrapper>
			<GameContext.Provider value={value}>
				{/* <button onClick={addNumber}>add turn</button> */}
				{/* CHANGE THIS FOR THE WELCOME SCREEN TO WORK */}
				{ !gameStarted && playerTeam ? (
					<WelcomeScreen
						setDifficulty={setDifficulty}
						setArmySize={setArmySize}
						setTrueSkill={setTrueSkill}
						setGameStarted={setGameStarted}
						enemyUnits={enemyUnits}
						session={session}
						playerTeam={playerTeam}
						setPlayerTeam={setPlayerTeam}
					/>
				) : (
					<GameBoard
						enemyUnits={enemyUnits}
						playerTeam={playerTeam}
						setPlayerTeam={setPlayerTeam}
						playerKingdoms={playerKingdoms}
						session={session}
						allUnitsOnField={allUnitsOnField}
						setAllUnitsOnField={setAllUnitsOnField}
					/>
				)}
				{ difficulty && armySize && playerTeam ? (
					// && trueSkill
					<>
						<EnemyFaangs
							difficulty={difficulty}
							armySize={armySize}
							setEnemyUnits={setEnemyUnits}
						/>
					</>
				) : null}
				<PlayerUnits
					trueSkill={trueSkill}
					setPlayerTeam={setPlayerTeam}
				/>
				{playerTeam ? (
					<PlayerKingdoms
						setPlayerKingdoms={setPlayerKingdoms}
						playerTeam={playerTeam}
					/>
				) : null}
			</GameContext.Provider>
		</AppWrapper>
	);
}

export default App;
