import React, { useState, useEffect } from 'react';

function WelcomeScreen({
	setDifficulty,
	setArmySize,
	setGameStarted,
	enemyUnits,
	setTrueSkill,
	session,
	playerTeam,
	setPlayerTeam,
}) {
	const [starters, setStarters] = useState([]);
	const [staticTitans, setStaticTitans] = useState([...playerTeam])

	function makeStarter(titan) {
		if (starters.length === 0) {
			setStarters([titan]);
		} else if (starters.length === 1 && starters[0] !== titan) {
			setStarters([...starters, titan]);
		} else {
			if (!starters.includes(titan)) {
				setStarters([starters[1], titan]);
			}
		}

		if (starters.length === 2) {
			const arr = playerTeam.filter((titan) => !starters.includes(titan));
			setPlayerTeam([starters[0], starters[1], ...arr]);
		}
	}

	function startGame() {
		setGameStarted(true)
		session.settings.gameStarted = true
		makeStarter()
	}

	useEffect(() => {
		setStaticTitans(staticTitans)
	}, [])

	// console.log('starters:', starters[0]);
	// console.log('starters:', starters[1]);
	console.log('playerTeam:', playerTeam[0]);
	console.log('playerTeam:', playerTeam[1]);

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
					<div key={staticTitans.indexOf(titan)}>
						{titan.name}
						<button
							onClick={() => {
								makeStarter(titan);
							}}>
							+
						</button>
					</div>
				);
			})}

			<button onClick={startGame}>Start Game</button>
		</div>
	);
}

export default WelcomeScreen;
