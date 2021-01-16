import React, { useEffect } from 'react';

const PlayerKingdoms = ({ setPlayerKingdoms, playerTeam }) => {

	class Kingdom {
		constructor(name, health, defense, regeneration, showcase) {
			// specs
			this.isAlive = true;
			this.isKingdom = true
			// stats
			this.name = name;
			this.health = health;
			this.defense = defense;
			this.regeneration = regeneration;
			this.showcase = showcase;
			this.speed = 0;
		}
	}

	const fireKingdom = new Kingdom(
		'Fire Kingdom',
		{ ...playerTeam[0] }.health * 3,
		{ ...playerTeam[0] }.defense,
		{ ...playerTeam[0] }.regeneration,
		{ ...playerTeam[0] }.showcase,
	);

	const waterKingdom = new Kingdom(
		'Water Kingdom',
		{ ...playerTeam[1] }.health * 3,
		{ ...playerTeam[1] }.defense,
		{ ...playerTeam[1] }.regeneration,
		{ ...playerTeam[1] }.showcase,
	);

	const stoneKingdom = new Kingdom(
		'Stone Kingdom',
		{ ...playerTeam[2] }.health * 3,
		{ ...playerTeam[2] }.defense,
		{ ...playerTeam[2] }.regeneration,
		{ ...playerTeam[2] }.showcase,
	);

	const airKingdom = new Kingdom(
		'Air Kingdom',
		{ ...playerTeam[3] }.health * 3,
		{ ...playerTeam[3] }.defense,
		{ ...playerTeam[3] }.regeneration,
		{ ...playerTeam[3] }.showcase,
	);

	const lightningKingdom = new Kingdom(
		'Lightning Kingdom',
		{ ...playerTeam[4] }.health * 3,
		{ ...playerTeam[4] }.defense,
		{ ...playerTeam[4] }.regeneration,
		{ ...playerTeam[4] }.showcase,
	);

	const terraKingdom = new Kingdom(
		'Terra Kingdom',
		{ ...playerTeam[5] }.health * 3,
		{ ...playerTeam[5] }.defense,
		{ ...playerTeam[5] }.regeneration,
		{ ...playerTeam[5] }.showcase,
	);

	const metalKingdom = new Kingdom(
		'Metal Kingdom',
		{ ...playerTeam[6] }.health * 3,
		{ ...playerTeam[6] }.defense,
		{ ...playerTeam[6] }.regeneration,
		{ ...playerTeam[6] }.showcase,
	);

	useEffect(() => {
		setPlayerKingdoms([
			fireKingdom,
			waterKingdom,
			stoneKingdom,
			airKingdom,
			lightningKingdom,
			terraKingdom,
			metalKingdom,
		]);
	}, []);

	return <div></div>;
};

export default PlayerKingdoms;
