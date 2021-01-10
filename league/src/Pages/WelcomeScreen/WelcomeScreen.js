import React from 'react';
import { Link } from 'react-router-dom'

const WelcomeScreen = ({ setDifficulty, setArmySize, setGameStarted, enemyUnits, setTrueSkill }) => {
    return (
		<div>
			<div>
				Choose Difficulty
				<button onClick={() => setDifficulty('easy')}>Easy</button>
				<button onClick={() => setDifficulty('normal')}>Normal</button>
				<button onClick={() => setDifficulty('veteran')}>
					Veteran
				</button>
				<button onClick={() => setDifficulty('insane')}>Insane</button>
			</div>
			<div>
				Choose Army Size
				<button onClick={() => setArmySize(10)}>10</button>
				<button onClick={() => setArmySize(20)}>20</button>
				<button onClick={() => setArmySize(50)}>50</button>
				<button onClick={() => setArmySize(100)}>100</button>
			</div>
			<br />

			<div>
				Choose True Skill
				<button onClick={() => setTrueSkill('normal')}>normal</button>
				<button onClick={() => setTrueSkill('heroic')}>heroic</button>
				<button onClick={() => setTrueSkill('unfar')}>unfair</button>
			</div>
			<br />

			{enemyUnits ? (
				<Link to='/battle' onClick={() => setGameStarted(true)}>Start Game</Link>
			) : null}
		</div>
	);
};

export default WelcomeScreen;