import React, { useState, useEffect } from 'react';
import { faang } from './FaangStats';

const PlayerUnits = ({ trueSkill, enemyUnits }) => {
	const eliteStats = faang.elite;

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
		data.map((e) => {
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
		// setTitanConversion(statsObject);
	}

	class Titan {
		constructor(
			name,
			health,
			attack,
			defense,
			regeneration,
			speed,
			energy
		) {
			// specs
			this.isAlive = true;
			// stats
			this.name = name;
			this.health = health;
			this.attack = attack;
			this.defense = defense;
			this.regeneration = regeneration;
			this.speed = speed;
			this.energy = energy;
		}
		speak() {
			console.log(this.name);
		}
		attackUnit(unit) {
			console.log(
				`${this.name} attacked ${unit.name} and now it has ${unit.health}`
			);
			unit.health -= this.attack;
		}
	}

    const titans = {
        fire: {
            health: 5,
            attack: 9,
            defense: 4,
            energy: 7,
            regeneration: 5,
            speed: 8,
        },
        water: {
            health: 9,
            attack: 5,
            defense: 4,
            energy: 8,
            regeneration: 5,
            speed: 7,
        },
        stone: {
            health: 7,
            attack: 5,
            defense: 8,
            energy: 4,
            regeneration: 5,
            speed: 9,
        },
        air: {
            health: 5,
            attack: 5,
            defense: 4,
            energy: 9,
            regeneration: 8,
            speed: 7,
        },
        lightning: {
            health: 5,
            attack: 5,
            defense: 4,
            energy: 8,
            regeneration: 9,
            speed: 7,
        },
        terra: {
            health: 8,
            attack: 7,
            defense: 9,
            energy: 5,
            regeneration: 4,
            speed: 5,
        },
        metal: {
            health: 4,
            attack: 9,
            defense: 5,
            energy: 8,
            regeneration: 7,
            speed: 5,
        },
    }
    
    const fireTitan = new Titan(
        'Fire',
        averageStats(eliteStats).health * (titans.fire.health * .1),
        averageStats(eliteStats).attack * (titans.fire.attack * .1),
        averageStats(eliteStats).defense * (titans.fire.defense * .1),
        averageStats(eliteStats).regeneration * (titans.fire.regeneration * .1),
        averageStats(eliteStats).speed * (titans.fire.speed * .1),
        averageStats(eliteStats).energy * (titans.fire.energy * .1),
    );
    const waterTitan = new Titan(
        'Water',
        averageStats(eliteStats).health * (titans.water.health * .1),
        averageStats(eliteStats).attack * (titans.water.attack * .1),
        averageStats(eliteStats).defense * (titans.water.defense * .1),
        averageStats(eliteStats).regeneration * (titans.water.regeneration * .1),
        averageStats(eliteStats).speed * (titans.water.speed * .1),
        averageStats(eliteStats).energy * (titans.water.energy * .1),
    );
    const stoneTitan = new Titan(
        'Stone',
        averageStats(eliteStats).health * (titans.stone.health * .1),
        averageStats(eliteStats).attack * (titans.stone.attack * .1),
        averageStats(eliteStats).defense * (titans.stone.defense * .1),
        averageStats(eliteStats).regeneration * (titans.stone.regeneration * .1),
        averageStats(eliteStats).speed * (titans.stone.speed * .1),
        averageStats(eliteStats).energy * (titans.stone.energy * .1),
    );
    const airTitan = new Titan(
        'Air',
        averageStats(eliteStats).health * (titans.air.health * .1),
        averageStats(eliteStats).attack * (titans.air.attack * .1),
        averageStats(eliteStats).defense * (titans.air.defense * .1),
        averageStats(eliteStats).regeneration * (titans.air.regeneration * .1),
        averageStats(eliteStats).speed * (titans.air.speed * .1),
        averageStats(eliteStats).energy * (titans.air.energy * .1),
    );
    const lightningTitan = new Titan(
        'Lightning',
        averageStats(eliteStats).health * (titans.lightning.health * .1),
        averageStats(eliteStats).attack * (titans.lightning.attack * .1),
        averageStats(eliteStats).defense * (titans.lightning.defense * .1),
        averageStats(eliteStats).regeneration * (titans.lightning.regeneration * .1),
        averageStats(eliteStats).speed * (titans.lightning.speed * .1),
        averageStats(eliteStats).energy * (titans.lightning.energy * .1),
    );
    const terraTitan = new Titan(
        'Terra',
        averageStats(eliteStats).health * (titans.terra.health * .1),
        averageStats(eliteStats).attack * (titans.terra.attack * .1),
        averageStats(eliteStats).defense * (titans.terra.defense * .1),
        averageStats(eliteStats).regeneration * (titans.terra.regeneration * .1),
        averageStats(eliteStats).speed * (titans.terra.speed * .1),
        averageStats(eliteStats).energy * (titans.terra.energy * .1),
    );
    const metalTitan = new Titan(
        'Metal',
        averageStats(eliteStats).health * (titans.metal.health * .1),
        averageStats(eliteStats).attack * (titans.metal.attack * .1),
        averageStats(eliteStats).defense * (titans.metal.defense * .1),
        averageStats(eliteStats).regeneration * (titans.metal.regeneration * .1),
        averageStats(eliteStats).speed * (titans.metal.speed * .1),
        averageStats(eliteStats).energy * (titans.metal.energy * .1),
    );

    const team = [fireTitan, waterTitan, stoneTitan, airTitan, lightningTitan, terraTitan, metalTitan]

    console.log(enemyUnits)
    console.log(fireTitan.attackUnit(enemyUnits[0]))

	return <div></div>;
};

export default PlayerUnits;
