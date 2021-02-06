import React from 'react';

const WelcomeScreen = ({ setDifficulty, setArmySize, setGameStarted, enemyUnits, setTrueSkill, session }) => {
	
    return (
		<div>
			<div>
				Choose Difficulty(ratio of difficult and easy enemies)
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
				Choose True Skill (sliders for stats and how tough the combat is)
				<button onClick={() => setTrueSkill('normal')}>normal</button>
				<button onClick={() => setTrueSkill('heroic')}>heroic</button>
				<button onClick={() => setTrueSkill('unfair')}>unfair</button>
			</div>
			<br />

			{enemyUnits ? (
				<button onClick={() => setGameStarted(true)}>Start Game</button>
			) : null}
		</div>
	);
};

export default WelcomeScreen;