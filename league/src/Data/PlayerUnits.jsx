import React, { useEffect } from 'react';
import { faang } from './FaangStats';
import { session } from './SessionLogic';

const PlayerUnits = ({ setPlayerTeam }) => {
	const eliteStats = faang.elite;

		class Titan {
			constructor(
				name,
				element,
				kingdom,
				currentHealth,
				maxHealth,
				attack,
				defense,
				regeneration,
				speed,
				energy,
				zen,
				showcase
			) {
				// specs
				this.isAlive = true;
				this.isTitan = true;
				// stats
				this.name = name;
				this.element = element;
				this.kingdom = kingdom;
				this.currentHealth = currentHealth;
				this.maxHealth = maxHealth;
				this.attack = attack;
				this.defense = defense;
				this.regenerationRate = (100 - regeneration) / 25;
				this.speed = speed;
				this.energy = energy;
				this.zen = zen;
				this.showcase = showcase;
			}
			regenerateHealth() {
				if (
					this.currentHealth < this.maxHealth &&
					this.regenerationRate > 0
				) {
					this.currentHealth +=
						this.currentHealth * (0.01 * this.regenerationRate);
				}
			}
			attackUnit(unit) {
				console.log(
					`${this.name} attacked ${unit.name} and now it has ${unit.currentHealth} health remaining`
				);
				unit.currentHealth -= this.attack;
				if (unit.currentHealth <= 0) {
					unit.isAlive = false;
					console.log(`${unit.name} died from the attack`);
				}
			}
		}

	function averageStats(object) {
		// TURN THE OBJECT INTO AN ARRAY OF OBJECTS
		let data = Object.entries(object);
		// CREATE AN ARRAY FOR MAPPED DATA TO GO INTO
		let dataArray = [];
		// CREATE AN OBJECT TO HOLD ALL STATS FROM MAPPED ARRAY
		let statsObject = {
			health: [],
			attack: [],
			defense: [],
			regeneration: [],
			speed: [],
			total: [],
		};
		// PUSH SEPARATE DATA SO IT CAN BE MUTATED
		data.forEach((e) => {
            dataArray.push(e[1]);
		});
		// PUSH ALL STATS INTO STATS OBJECT
		for (let i = 0; i < dataArray.length; i++) {
			statsObject.health.push(dataArray[i].health);
			statsObject.attack.push(dataArray[i].attack);
			statsObject.defense.push(dataArray[i].defense);
			statsObject.regeneration.push(dataArray[i].regeneration);
			statsObject.speed.push(dataArray[i].speed);
			statsObject.total.push(dataArray[i].total);
		}

		// REDUCE ALL STATS IN EACH ARRAY INTO ONE VALUE
		// health
		statsObject.health =
			statsObject.health.reduce((a, b) => a + b, 0) /
			statsObject.health.length;
		// attack
		statsObject.attack =
			statsObject.attack.reduce((a, b) => a + b, 0) /
			statsObject.attack.length;
		// defense
		statsObject.defense =
			statsObject.defense.reduce((a, b) => a + b, 0) /
			statsObject.defense.length;
		// regeneration
		statsObject.regeneration =
			statsObject.regeneration.reduce((a, b) => a + b, 0) /
			statsObject.regeneration.length;
		// speed
		statsObject.speed =
			statsObject.speed.reduce((a, b) => a + b, 0) /
			statsObject.speed.length;
		// total
		statsObject.total =
			statsObject.total.reduce((a, b) => a + b, 0) /
            statsObject.total.length;
        return statsObject
	}

    const titans = {
		fire: {
			health: 6,
			attack: 9,
			defense: 5,
			energy: 8,
			regeneration: 4,
			speed: 7,
			zen: 5,
			colors: {
				primary: '#F7130A',
				secondary: '#ED7609',
				contrast: '#E02A02',
			},
		},
		water: {
			health: 9,
			attack: 5,
			defense: 7,
			energy: 5,
			regeneration: 8,
			speed: 6,
			zen: 4,
			colors: {
				primary: '#2F30E0',
				secondary: '#268FED',
				contrast: '#9326ED',
			},
		},
		stone: {
			health: 8,
			attack: 5,
			defense: 9,
			energy: 4,
			regeneration: 6,
			speed: 5,
			zen: 7,
			colors: {
				primary: '#706459',
				secondary: '#877A64',
				contrast: '#5F727D',
			},
		},
		air: {
			health: 4,
			attack: 6,
			defense: 5,
			energy: 9,
			regeneration: 7,
			speed: 8,
			zen: 5,
			colors: {
				primary: '#D0DAD8',
				secondary: '#CFDEE6',
				contrast: '#CFE6D4',
			},
		},
		lightning: {
			health: 5,
			attack: 8,
			defense: 4,
			energy: 7,
			regeneration: 5,
			speed: 9,
			zen: 6,
			colors: {
				primary: '#FAED3E',
				secondary: '#E3D346',
				contrast: '#23FAF5',
			},
		},
		terra: {
			health: 7,
			attack: 4,
			defense: 6,
			energy: 5,
			regeneration: 9,
			speed: 5,
			zen: 8,
			colors: {
				primary: '#3AC92A',
				secondary: '#24E04A',
				contrast: '#8B4513',
			},
		},
		metal: {
			health: 5,
			attack: 7,
			defense: 8,
			energy: 6,
			regeneration: 5,
			speed: 4,
			zen: 9,
			colors: {
				primary: '#DBDBDB',
				secondary: '#C4C4C4',
				contrast: '#B5B5B5',
			},
		},
	};
    
    const fireTitan = new Titan(
		'Ajna',
		'Fire',
		'Fire Kingdom',
        Math.floor(averageStats(eliteStats).health * (titans.fire.health * .1)),
        Math.floor(averageStats(eliteStats).health * (titans.fire.health * .1)),
        averageStats(eliteStats).attack * (titans.fire.attack * .1),
        averageStats(eliteStats).defense * (titans.fire.defense * .1),
        averageStats(eliteStats).regeneration * (titans.fire.regeneration * .1),
        averageStats(eliteStats).speed * (titans.fire.speed * .1),
        titans.fire.energy,
        titans.fire.zen,
        titans.fire
    );

    const waterTitan = new Titan(
		'Mulad',
		'Water',
		'Water Kingdom',
        Math.floor(averageStats(eliteStats).health * (titans.water.health * .1)),
        Math.floor(averageStats(eliteStats).health * (titans.water.health * .1)),
        averageStats(eliteStats).attack * (titans.water.attack * .1),
        averageStats(eliteStats).defense * (titans.water.defense * .1),
        averageStats(eliteStats).regeneration * (titans.water.regeneration * .1),
        averageStats(eliteStats).speed * (titans.water.speed * .1),
        titans.water.energy,
        titans.water.zen,
        titans.water
    );

    const stoneTitan = new Titan(
		'Vishu',
		'Rock',
		'Stone Kingdom',
        Math.floor(averageStats(eliteStats).health * (titans.stone.health * .1)),
        Math.floor(averageStats(eliteStats).health * (titans.stone.health * .1)),
        averageStats(eliteStats).attack * (titans.stone.attack * .1),
        averageStats(eliteStats).defense * (titans.stone.defense * .1),
        averageStats(eliteStats).regeneration * (titans.stone.regeneration * .1),
        averageStats(eliteStats).speed * (titans.stone.speed * .1),
        titans.stone.energy,
        titans.stone.zen,
        titans.stone
    );

    const airTitan = new Titan(
		'Nabhi',
		'Air',
		'Air Kingdom',
        Math.floor(averageStats(eliteStats).health * (titans.air.health * .1)),
        Math.floor(averageStats(eliteStats).health * (titans.air.health * .1)),
        averageStats(eliteStats).attack * (titans.air.attack * .1),
        averageStats(eliteStats).defense * (titans.air.defense * .1),
        averageStats(eliteStats).regeneration * (titans.air.regeneration * .1),
        averageStats(eliteStats).speed * (titans.air.speed * .1),
        titans.air.energy,
        titans.air.zen,
        titans.air
    );

    const lightningTitan = new Titan(
		'Svadhi',
		'Electricity',
		'Lightning Kingdom',
        Math.floor(averageStats(eliteStats).health * (titans.lightning.health * .1)),
        Math.floor(averageStats(eliteStats).health * (titans.lightning.health * .1)),
        averageStats(eliteStats).attack * (titans.lightning.attack * .1),
        averageStats(eliteStats).defense * (titans.lightning.defense * .1),
        averageStats(eliteStats).regeneration * (titans.lightning.regeneration * .1),
        averageStats(eliteStats).speed * (titans.lightning.speed * .1),
        titans.lightning.energy,
        titans.lightning.zen,
        titans.lightning
    );

    const terraTitan = new Titan(
		'Sahas',
		'Plant',
		'Terra Kingdom',
        Math.floor(averageStats(eliteStats).health * (titans.terra.health * .1)),
        Math.floor(averageStats(eliteStats).health * (titans.terra.health * .1)),
        averageStats(eliteStats).attack * (titans.terra.attack * .1),
        averageStats(eliteStats).defense * (titans.terra.defense * .1),
        averageStats(eliteStats).regeneration * (titans.terra.regeneration * .1),
        averageStats(eliteStats).speed * (titans.terra.speed * .1),
        titans.terra.energy,
        titans.terra.zen,
        titans.terra
    );

    const metalTitan = new Titan(
		'Anaht',
		'Metal',
		'Metal Kingdom',
        Math.floor(averageStats(eliteStats).health * (titans.metal.health * .1)),
        Math.floor(averageStats(eliteStats).health * (titans.metal.health * .1)),
        averageStats(eliteStats).attack * (titans.metal.attack * .1),
        averageStats(eliteStats).defense * (titans.metal.defense * .1),
        averageStats(eliteStats).regeneration * (titans.metal.regeneration * .1),
        averageStats(eliteStats).speed * (titans.metal.speed * .1),
        titans.metal.energy,
        titans.metal.zen,
        titans.metal
    );

    useEffect(() => {
		setPlayerTeam([
			fireTitan,
			waterTitan,
			stoneTitan,
			airTitan,
			lightningTitan,
			terraTitan,
			metalTitan,
		]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return null
};

export default PlayerUnits;
