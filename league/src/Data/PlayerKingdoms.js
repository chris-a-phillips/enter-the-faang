import React, { useEffect } from 'react';

const PlayerKingdoms = ({ setPlayerKingdoms, playerTeam }) => {

	class Kingdom {
		constructor(
			name,
			maxHealth,
			currentHealth,
			defense,
			regenerationRate,
			showcase
		) {
			// specs
			this.isAlive = true;
			this.isKingdom = true;
			// stats
			this.name = name;
			this.maxHealth = maxHealth;
			this.currentHealth = currentHealth;
			this.defense = defense;
			this.regenerationRate = regenerationRate;
			this.showcase = showcase;
			this.speed = 0;
		}
		regenerateHealth() {
			if (this.currentHealth < this.maxHealth) {
				let regenerated =
					this.currentHealth * (0.01 * this.regenerationRate);
				this.currentHealth += regenerated;
			}
		}
	}

	const fireKingdom = new Kingdom(
		'Fire Kingdom',
		Math.floor({ ...playerTeam[0] }.currentHealth) * 3,
		Math.floor({ ...playerTeam[0] }.currentHealth) * 3,
		{ ...playerTeam[0] }.defense,
		{ ...playerTeam[0] }.regenerationRate,
		{ ...playerTeam[0] }.showcase,
	);

	const waterKingdom = new Kingdom(
		'Water Kingdom',
		Math.floor({ ...playerTeam[1] }.currentHealth) * 3,
		Math.floor({ ...playerTeam[1] }.currentHealth) * 3,
		{ ...playerTeam[1] }.defense,
		{ ...playerTeam[1] }.regenerationRate,
		{ ...playerTeam[1] }.showcase,
	);

	const stoneKingdom = new Kingdom(
		'Stone Kingdom',
		Math.floor({ ...playerTeam[2] }.currentHealth) * 3,
		Math.floor({ ...playerTeam[2] }.currentHealth) * 3,
		{ ...playerTeam[2] }.defense,
		{ ...playerTeam[2] }.regenerationRate,
		{ ...playerTeam[2] }.showcase,
	);

	const airKingdom = new Kingdom(
		'Air Kingdom',
		Math.floor({ ...playerTeam[3] }.currentHealth) * 3,
		Math.floor({ ...playerTeam[3] }.currentHealth) * 3,
		{ ...playerTeam[3] }.defense,
		{ ...playerTeam[3] }.regenerationRate,
		{ ...playerTeam[3] }.showcase,
	);

	const lightningKingdom = new Kingdom(
		'Lightning Kingdom',
		Math.floor({ ...playerTeam[4] }.currentHealth) * 3,
		Math.floor({ ...playerTeam[4] }.currentHealth) * 3,
		{ ...playerTeam[4] }.defense,
		{ ...playerTeam[4] }.regenerationRate,
		{ ...playerTeam[4] }.showcase,
	);

	const terraKingdom = new Kingdom(
		'Terra Kingdom',
		Math.floor({ ...playerTeam[5] }.currentHealth) * 3,
		Math.floor({ ...playerTeam[5] }.currentHealth) * 3,
		{ ...playerTeam[5] }.defense,
		{ ...playerTeam[5] }.regenerationRate,
		{ ...playerTeam[5] }.showcase,
	);

	const metalKingdom = new Kingdom(
		'Metal Kingdom',
		Math.floor({ ...playerTeam[6] }.currentHealth) * 3,
		Math.floor({ ...playerTeam[6] }.currentHealth) * 3,
		{ ...playerTeam[6] }.defense,
		{ ...playerTeam[6] }.regenerationRate,
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
