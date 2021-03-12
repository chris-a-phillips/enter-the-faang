import React, { useState } from 'react';

function WelcomeScreen({
	setDifficulty,
	setArmySize,
	setGameStarted,
	enemyUnits,
	setTrueSkill,
	playerTeam,
	setPlayerTeam,
}) {
	const [starters, setStarters] = useState([]);
	const staticTitans = [...playerTeam]

	function makeStarter(titan) {
		if (starters.length === 0) {
			setStarters([titan])
		} else if (starters.length === 1 && starters[0] !== titan) {
			setStarters([...starters, titan])
		} else {
			if(!starters.includes(titan)) {
				setStarters([starters[1], titan])
			}
		}
	}
	
	function chooseOrder() {
		if (starters.length === 2) {
			const arr = playerTeam.filter(titan => !starters.includes(titan))
			
			setPlayerTeam([starters[0], starters[1], ...arr])
		}
		
	}

	console.log('starters:', starters)
	console.log('playerTeam:', playerTeam)

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
				Choose True Skill (sliders for stats and how tough the combat
				is)
				<button onClick={() => setTrueSkill('normal')}>normal</button>
				<button onClick={() => setTrueSkill('heroic')}>heroic</button>
				<button onClick={() => setTrueSkill('unfair')}>unfair</button>
			</div>
			<br />

			<h1>Choose Your Starting Units</h1>
			{staticTitans.map((titan) => {
				return (
					<div onClick={chooseOrder}>
						{titan.name}
						<button
							onClick={() => {
								makeStarter(titan)
								chooseOrder();
							}}>
							+
						</button>
					</div>
				);
			})}

			{enemyUnits ? (
				<button onClick={() => setGameStarted(true)}>Start Game</button>
			) : null}
		</div>
	);
}

export default WelcomeScreen;
