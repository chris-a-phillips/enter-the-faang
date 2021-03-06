import React, { useEffect } from 'react';
import { pedigree, faang, randomNames } from './FaangStats';
import { session } from './SessionLogic';
import { calculations } from './SessionLogic'

const EnemyFaangs = ({ setEnemyUnits }) => {
	const unitPool = [];
	class BasicFaang {
		constructor(
			name,
			currentHealth,
			maxHealth,
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
			this.currentHealth = currentHealth;
			this.maxHealth = maxHealth;
			this.attack = attack;
			this.defense = defense;
			this.regenerationRate = (100 - regeneration) / 25;
			this.speed = speed;
			this.isFaang = true;
			this.status = {
				flash: false
			}
		}
		regenerateHealth() {
			// IF CURRENT HEALTH IS LESS THAN MAX HEALTH AND REGENERATION RATE IS POSITIVE
			if (this.currentHealth < this.maxHealth && this.regenerationRate > 0) {
				// IF REGENERATION WILL BOOST HEALTH PAST MAX HEALTH
				if ((this.currentHealth += (this.currentHealth * ( .01 * this.regenerationRate))) > this.maxHealth) {
					// MAKE CURRENT HEALTH MAX HEALTH
					this.currentHealth = this.maxHealth
					// ELSE REGENERATE
				} else {
					this.currentHealth +=
						this.currentHealth * (0.01 * this.regenerationRate);
				}
			}
		}
		attackUnit(target) {
			// IF THIS IS ALIVE
			if (this.isAlive) {
				// IF ZENSCAPE IS SMOKE THE ATTACK MAY MISS
				if (session.currentZenscape.name === 'Smoke' && Math.random() * 100 < session.currentZenscape.intensity) {
						return {
							event: `${this.name} missed its attack`,
							bgColor: this.showcase.rankColor,
							color: '#fff',
						};
				}
				// IF ZENSCAPE IS FLASH IT MAY NOT ATTACK
				if (session.currentZenscape.name === 'Flash' && Math.random() * 100 < session.currentZenscape.intensity && this.status.flash) {
						return {
							event: `${this.name} didn't attack because it was flashed`,
							bgColor: this.showcase.rankColor,
							color: '#fff',
						};
				}
				// THIS ATTACK
				target.currentHealth -= calculations.enemyDamageCalc(
					this,
					target,
					session
				);
				const percent = Math.ceil(
					(target.currentHealth / target.maxHealth) * 100
				);
				// IF ZENSCAPE IS THORN THIS UNIT ALSO TAKES DAMAGE
				if (
					session.currentZenscape.name === 'Thorn' &&
					Math.random() * 100 < session.currentZenscape.intensity
				) {
					this.currentHealth -= session.currentZenscape.intensity;
				}
				// IF ATTACK WAS FATAL
				if (target.currentHealth <= 0) {
					target.isAlive = false;
					return {
						event: `${this.name} attacked ${target.name} and it was defeated`,
						bgColor: this.showcase.rankColor,
						color: '#fff',
					};
					// IF ATTACK WENT THROUGH BUT WAS NOT FATAL
				} else
					return {
						event: `${this.name} attacked ${target.name} and now it has ${percent}% health remaining`,
						bgColor: this.showcase.rankColor,
						color: '#fff',
					};
				// IF THIS IS NOT ALIVE
			} else return {
				event: `${this.name} couldn't attack becuase it was defeated by a faster unit`,
				bgColor: this.showcase.rankColor,
				color: '#fff',
			};
		}
	}

	class AdvancedFaang extends BasicFaang {
		constructor(
			name,
			currentHealth,
			maxHealth,
			attack,
			defense,
			regeneration,
			speed,
			rank,
			pedigree,
			species,
			showcase,
			regenerationRate
		) {
			super(
				name,
				currentHealth,
				maxHealth,
				attack,
				defense,
				regeneration,
				speed,
				rank,
				pedigree,
				species,
				showcase,
				regenerationRate
			);
			this.isAdmin = true;
			this.class = 'Advanced';
		}
	}

	class EliteFaang extends AdvancedFaang {
		constructor(
			name,
			currentHealth,
			maxHealth,
			attack,
			defense,
			regeneration,
			speed,
			rank,
			pedigree,
			species,
			showcase,
			regenerationRate
		) {
			super(
				name,
				currentHealth,
				maxHealth,
				attack,
				defense,
				regeneration,
				speed,
				rank,
				pedigree,
				species,
				showcase,
				regenerationRate
			);
			this.class = 'Elite';
		}
	}

	// FAANG GENERATOR
	const basicUnits = faang.basic;
	const advancedUnits = faang.advanced;
	const eliteUnits = faang.elite;

	// RANDOM UNIT GENERATOR THAT PUSHES THE UNITS INTO THE UNIT POOL
	const generateRandomUnit = (rank) => {
		const length = Object.keys(rank).length;
		const randomNumber = Math.floor(Math.random() * length);
		const randomUnit = rank[Object.keys(rank)[randomNumber]];
		const percentChance = Math.floor(Math.random() * 100);
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
	const createShowcase = (unit) => {
		const showcase = {
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

	const setSettings = () => {
		for (let i = 0; i < session.settings.armySize; i++) {
			// SELECT PERCENTAGE OF UNITS WILL HAVE WHICH CLASSES
			let difficultyArray = [];
			if (session.settings.difficulty === 'easy') {
				difficultyArray = [70, 95];
			} else if (session.settings.difficulty === 'normal') {
				difficultyArray = [60, 90];
			} else if (session.settings.difficulty === 'veteran') {
				difficultyArray = [40, 70];
			} else if (session.settings.difficulty === 'insane') {
				difficultyArray = [20, 50];
			}
	
			// SELECT HOW MANY UNITS WILL BE CREATED
			const percentChance = Math.floor(Math.random() * 100);
			if (percentChance < difficultyArray[0]) {
				generateRandomUnit(basicUnits);
			} else if (percentChance < difficultyArray[1]) {
				generateRandomUnit(advancedUnits);
			} else {
				generateRandomUnit(eliteUnits);
			}
		}
	}

	useEffect(() => {
		setEnemyUnits(unitPool);
		setSettings();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null
};

export default EnemyFaangs;
