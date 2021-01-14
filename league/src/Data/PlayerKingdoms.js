import React, { useEffect } from 'react';

const PlayerKingdoms = ({ setPlayerKingdoms, kingdomTemplate }) => {

	console.log(kingdomTemplate)
	class Kingdom {
		constructor(name, health, defense, regeneration, showcase) {
			this.name = name;
			this.health = health;
			this.defense = defense;
			this.regeneration = regeneration;
			this.showcase = showcase;
		}
	}

	const fireKingdom = new Kingdom(
		'Fire Kingdom',
		kingdomTemplate[0].health * 3,
		kingdomTemplate[0].defense,
		kingdomTemplate[0].regeneration,
		kingdomTemplate[0].showcase
	);

	const waterKingdom = new Kingdom(
		'Water Kingdom',
		kingdomTemplate[1].health * 3,
		kingdomTemplate[1].defense,
		kingdomTemplate[1].regeneration,
		kingdomTemplate[1].showcase
	);

	const stoneKingdom = new Kingdom(
		'Stone Kingdom',
		kingdomTemplate[2].health * 3,
		kingdomTemplate[2].defense,
		kingdomTemplate[2].regeneration,
		kingdomTemplate[2].showcase
	);

	const airKingdom = new Kingdom(
		'Air Kingdom',
		kingdomTemplate[3].health * 3,
		kingdomTemplate[3].defense,
		kingdomTemplate[3].regeneration,
		kingdomTemplate[3].showcase
	);

	const lightningKingdom = new Kingdom(
		'Lightning Kingdom',
		kingdomTemplate[4].health * 3,
		kingdomTemplate[4].defense,
		kingdomTemplate[4].regeneration,
		kingdomTemplate[4].showcase
	);

	const terraKingdom = new Kingdom(
		'Terra Kingdom',
		kingdomTemplate[5].health * 3,
		kingdomTemplate[5].defense,
		kingdomTemplate[5].regeneration,
		kingdomTemplate[5].showcase
	);

	const metalKingdom = new Kingdom(
		'Metal Kingdom',
		kingdomTemplate[6].health * 3,
		kingdomTemplate[6].defense,
		kingdomTemplate[6].regeneration,
		kingdomTemplate[6].showcase
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
