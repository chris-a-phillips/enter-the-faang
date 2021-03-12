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
	const [swapPlaces, setSwapPlaces] = useState({
		state: false,
		index: null,
	});

	function chooseOrder(list, activeOne, activeTwo) {
		if (starters.length === 0) {
			setStarters();
		}

		if (swapPlaces.state && starters.length === 2) {
		}
	}

	// function swap(list, activeOne, activeTwo) {
	// 	if (swapPlaces.state === true) {
	// 		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0];
	// 		setActiveTitans(playerTeam.slice(0, 2));
	// 	}
	// 	setSwapPlaces({
	// 		state: false,
	// 		index: null,
	// 	});
	// 	setAllUnitsOnField(listUnits());
	// }

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
			{playerTeam.map((titan) => {
				return (
					<div onClick={chooseOrder}>
						{titan.name}
						<button
							onClick={() => {
								setSwapPlaces({
									state: true,
									index: playerTeam.indexOf(titan),
								});
								chooseOrder(
									playerTeam,
									swapPlaces.index,
									playerTeam.indexOf(titan)
								);
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
