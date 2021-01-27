import React, { useEffect } from 'react';
import { pedigree, faang, randomNames } from './FaangStats';
import { session } from './SessionLogic';

const EnemyFaangs = ({ difficulty, armySize, setEnemyUnits }) => {
	const unitPool = [];
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
			species,
			showcase
		) {
			// specs
			this.isAlive = true;
			this.rank = rank;
			this.pedigree = pedigree;
			this.species = species;
			this.showcase = showcase;
			// stats
			this.name = name;
			this.health = health;
			this.attack = attack;
			this.defense = defense;
			this.regeneration = regeneration;
			this.speed = speed;
			this.isFaang = true;
		}
		speak() {
			console.log(this.name);
		}
		attackUnit(target) {
			if (this.isAlive) {
				target.health -= this.attack;
				console.log(
					`${this.name} attacked ${target.name} and now it has ${target.health}`
				);
				if (target.health <= 0) {
					target.isAlive = false;
					console.log(`${target.name} died from the attack`);
				}
			}
			console.log(this)
			return {
				event: `${this.name} attacked ${target.name} and now it has ${target.health}`,
				color: this.showcase.speciesColor
			};
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
			species,
			showcase
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
				species,
				showcase
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
			species,
			showcase
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
				species,
				showcase
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
					randomUnit.species,
					createShowcase(randomUnit)
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
					randomUnit.species,
					createShowcase(randomUnit)
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
					randomUnit.species,
					createShowcase(randomUnit)
				)
			);
		}
	}

	// SHOWCASE CREATOR
	function createShowcase(unit) {
		let showcase = {
			description: null,
			rankColor: null,
			pedigreeColor: null,
			speciesColor: null,
		};

		// SET COLOR FOR RANKING
		switch (unit.rank) {
			case 'Basic':
				showcase.rankColor = '#9867FF';
				break;
			case 'Advanced':
				showcase.rankColor = '#5C25BA';
				break;
			case 'Elite':
				showcase.rankColor = '#24183D';
				break;
			default:
				break;
		}
		// SET COLOR FOR SPECIES
		switch (unit.species) {
			case 'Dra':
				showcase.speciesColor = '#5966FF';
				break;
			case 'Tyr':
				showcase.speciesColor = '#FF7373';
				break;
			case 'Sal':
				showcase.speciesColor = '#FFD640';
				break;
			case 'Met':
				showcase.speciesColor = '#4DFF80';
				break;
			case 'Gar':
				showcase.speciesColor = '#4BDDFF';
				break;
			case 'Hyd':
				showcase.speciesColor = '#FF9230';
				break;
			case 'Goo':
				showcase.speciesColor = '#DE63FF';
				break;
			case 'Kom':
				showcase.speciesColor = '#B5FF3D';
				break;
			case 'Pul':
				showcase.speciesColor = '#314511';
				break;
			default:
				break;
		}

		// SET COLOR FOR PEDIGREE
		if (pedigree.commonLevelOne.includes(unit.pedigree)) {
			showcase.pedigreeColor = '#9C5221';
		} else if (pedigree.specialLevelOne.includes(unit.pedigree)) {
			showcase.pedigreeColor = '#9C5221';
		} else if (pedigree.commonLevelTwo.includes(unit.pedigree)) {
			showcase.pedigreeColor = '#AAA9AD';
		} else if (pedigree.specialLevelTwo.includes(unit.pedigree)) {
			showcase.pedigreeColor = '#AAA9AD';
		} else if (pedigree.commonLevelThree.includes(unit.pedigree)) {
			showcase.pedigreeColor = '#F5D327';
		} else if (pedigree.specialLevelThree.includes(unit.pedigree)) {
			showcase.pedigreeColor = '#F0CE26';
		}
		return showcase;
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
		setEnemyUnits(unitPool);
	}, []);

	return <div></div>;
};

export default EnemyFaangs;
