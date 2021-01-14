import React, { useEffect } from 'react';
import { pedigree, faang, randomNames } from './FaangStats';
import { session } from './SessionLogic'

const EnemyFaangs = ({ difficulty, armySize, setEnemyUnits }) => {
	const unitPool = []
	class BasicFaang {
		constructor(
			name,
			health,
			attack,
			defense,
			regeneration,
			speed,
			rank,
			pedigree,
			species
		) {
			// specs
			this.isAlive = true;
			this.rank = rank;
			this.pedigree = pedigree;
			this.species = species;
			// stats
			this.name = name;
			this.health = health;
			this.attack = attack;
			this.defense = defense;
			this.regeneration = regeneration;
			this.speed = speed;
			this.isFaang = true
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

	class AdvancedFaang extends BasicFaang {
		constructor(
			name,
			health,
			attack,
			defense,
			regeneration,
			speed,
			rank,
			pedigree,
			species
		) {
			super(
				name,
				health,
				attack,
				defense,
				regeneration,
				speed,
				rank,
				pedigree,
				species
			);
			this.isAdmin = true;
			this.class = 'Advanced';
		}
	}

	class EliteFaang extends AdvancedFaang {
		constructor(
			name,
			health,
			attack,
			defense,
			regeneration,
			speed,
			rank,
			pedigree,
			species
		) {
			super(
				name,
				health,
				attack,
				defense,
				regeneration,
				speed,
				rank,
				pedigree,
				species
			);
			this.class = 'Elite';
		}
	}

	// FAANG GENERATOR
	let basicUnits = faang.basic;
	let advancedUnits = faang.advanced;
	let eliteUnits = faang.elite;

	// RANDOM UNIT GENERATOR THAT PUSHES THE UNITS INTO THE UNIT POOL
	function generateRandomUnit(rank) {
		let length = Object.keys(rank).length;
		let randomNumber = Math.floor(Math.random() * length);
		let randomUnit = rank[Object.keys(rank)[randomNumber]];
		let percentChance = Math.floor(Math.random() * 100);
		randomUnit.name =
			randomNames[Math.floor(Math.random() * randomNames.length)];

		if (rank.dra.rank === 'Basic') {
			if (percentChance <= 95) {
				randomUnit.pedigree =
					pedigree.commonLevelOne[
						Math.floor(
							Math.random() * pedigree.commonLevelOne.length
						)
					];
			} else {
				randomUnit.pedigree =
					pedigree.specialLevelOne[
						Math.floor(
							Math.random() * pedigree.specialLevelOne.length
						)
					];
			}
			unitPool.push(
				new BasicFaang(
					randomUnit.name,
					randomUnit.health,
					randomUnit.attack,
					randomUnit.defense,
					randomUnit.regeneration,
					randomUnit.speed,
					randomUnit.rank,
					randomUnit.pedigree,
					randomUnit.species
				)
			);
		} else if (rank.dra.rank === 'Advanced') {
			if (percentChance <= 95) {
				randomUnit.pedigree =
					pedigree.commonLevelTwo[
						Math.floor(
							Math.random() * pedigree.commonLevelTwo.length
						)
					];
			} else {
				randomUnit.pedigree =
					pedigree.specialLevelTwo[
						Math.floor(
							Math.random() * pedigree.specialLevelTwo.length
						)
					];
			}
			unitPool.push(
				new AdvancedFaang(
					randomUnit.name,
					randomUnit.health,
					randomUnit.attack,
					randomUnit.defense,
					randomUnit.regeneration,
					randomUnit.speed,
					randomUnit.rank,
					randomUnit.pedigree,
					randomUnit.species
				)
			);
		} else {
			if (percentChance <= 95) {
				randomUnit.pedigree =
					pedigree.commonLevelThree[
						Math.floor(
							Math.random() * pedigree.commonLevelThree.length
						)
					];
			} else {
				randomUnit.pedigree =
					pedigree.specialLevelThree[
						Math.floor(
							Math.random() * pedigree.specialLevelThree.length
						)
					];
			}
			unitPool.push(
				new EliteFaang(
					randomUnit.name,
					randomUnit.health,
					randomUnit.attack,
					randomUnit.defense,
					randomUnit.regeneration,
					randomUnit.speed,
					randomUnit.rank,
					randomUnit.pedigree,
					randomUnit.species
				)
			);
		}
	}

	// PLAYER GAME SETTINGS

	for (let i = 0; i < armySize; i++) {
		// SELECT PERCENTAGE OF UNITS WILL HAVE WHICH CLASSES
		let difficultyArray = [];
		if (difficulty === 'easy') {
			difficultyArray = [70, 95];
		} else if (difficulty === 'normal') {
			difficultyArray = [60, 90];
		} else if (difficulty === 'veteran') {
			difficultyArray = [40, 70];
		} else if (difficulty === 'insane') {
			difficultyArray = [20, 50];
		}

		// SELECT HOW MANY UNITS WILL BE CREATED
		let percentChance = Math.floor(Math.random() * 100);
		if (percentChance < difficultyArray[0]) {
			generateRandomUnit(basicUnits);
		} else if (percentChance < difficultyArray[1]) {
			generateRandomUnit(advancedUnits);
		} else {
			generateRandomUnit(eliteUnits);
		}
    }

    useEffect(() => {
		setEnemyUnits(unitPool)
		console.log(unitPool)
    }, [])
    
	return <div></div>;
};

export default EnemyFaangs;