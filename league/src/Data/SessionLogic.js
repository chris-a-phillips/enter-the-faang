class Game {
	constructor() {
		this.turnNumber = 0;
		this.settings = {
			difficulty: 'normal',
			armySize: 20,
			trueSkill: 'normal'
		};
		this.eventLog = [];
		this.turnPhase = false;
		this.player = null;
		this.currentTurn = 'player';
		this.trueSkill = 5;
		this.modifiers = 1;
		this.phase = 'Selection';
		this.currentZenscape = null;
		this.notificationTimer = 0;
		this.zenscape = {
			// FIRE && WATER -> player field increases regeneration
			steam: {
				name: 'Steam',
				description: 'Player units regeneration increases over time',
				intensity: 0,
			},
			// STONE && FIRE -> enemy units take damage over time
			lava: {
				name: 'Lava',
				description: 'Enemy units take damage over time',
				intensity: 0,
			},
			// AIR && FIRE -> enemy attacks have chance of missing
			smoke: {
				name: 'Smoke',
				description: 'Enemy attacks have chance of missing',
				intensity: 50,
			},
			// LIGHTNING && FIRE -> player attacks permanently lower enemy defense
			plasma: {
				name: 'Plasma',
				description: 'Player attacks permanently lower enemy defense',
				intensity: 0,
			},
			// METAL && ANYTHING -> player stats get boosted
			enhance: {
				name: 'Enhance',
				description: 'Player stats get boosted',
				intensity: 0,
			},
			// TERRA && FIRE -> player attack gets boosted over time
			blaze: {
				name: 'Blaze',
				description: 'Player attack gets boosted over time',
				intensity: 0,
			},
			// WATER && STONE -> player units gain more energy over time
			spring: {
				name: 'Spring',
				description: 'Player units gain more energy over time',
				intensity: 0,
			},
			// AIR && WATER -> enemy attack power is reduced
			ice: {
				name: 'Ice',
				description: 'Enemy attack power is reduced',
				intensity: 0,
			},
			// LIGHTNING && WATER -> player attacks have splash damage
			storm: {
				name: 'Storm',
				description: 'Player attacks have splash damage',
				intensity: 0,
			},
			// TERRA && WATER -> slow down enemy units
			swamp: {
				name: 'Swamp',
				description: 'Enemy units are slowed down',
				intensity: 0,
			},
			// STONE && AIR -> enemy units regenerate less health
			sandstorm: {
				name: 'Sandstorm',
				description: 'Enemy units regenerate less health',
				intensity: 0,
			},
			// STONE && LIGHTNING -> enemy has a small chance of attacking another enemy
			glare: {
				name: 'Glare',
				description: 'Enemy has a small chance of attacking another enemy',
				intensity: 0,
			},
			// TERRA && STONE -> enemy takes damage after attacking
			thorn: {
				name: 'Thorn',
				description: 'Enemy takes damage after attacking',
				intensity: 0,
			},
			// AIR && LIGHTNING -> if player attack hits enemy before enemy attacks, the enemy has a smaller chance of attacking
			flash: {
				name: 'Flash',
				description: 'If player attack hits enemy before enemy attacks, the enemy has a smaller chance of attacking',
				intensity: 0,
			},
			// AIR && TERRA -> enemy special effects are lessened
			spore: {
				name: 'Spore',
				description: 'Enemy special effects are lessened',
				intensity: 0,
			},
			// LIGHTNING && TERRA -> player attack has small chance to do double damage
			crystal: {
				name: 'Crystal',
				description: 'Player attack has small chance to do double damage',
				intensity: 0,
			},
		};
	}

	enhanceZen(titanOne, titanTwo) {
		const titans = [titanOne.kingdom, titanTwo.kingdom];
		let zenscapeType;
		this.zenscape.colors = {
			colorGroupOne: titanOne.showcase.colors,
			colorGroupTwo: titanTwo.showcase.colors,
		};

		// FIRE && WATER -> player field increases regeneration
		if (
			titans.includes('Water Kingdom') &&
			titans.includes('Fire Kingdom')
		) {
			zenscapeType = this.zenscape.steam;
			zenscapeType.intensity++;
			// STONE && FIRE -> enemy units take damage over time
		} else if (
			titans.includes('Stone Kingdom') &&
			titans.includes('Fire Kingdom')
		) {
			zenscapeType = this.zenscape.lava;
			zenscapeType.intensity++;
			// AIR && FIRE -> enemy attacks have chance of missing
		} else if (
			titans.includes('Air Kingdom') &&
			titans.includes('Fire Kingdom')
		) {
			zenscapeType = this.zenscape.smoke;
			zenscapeType.intensity++;
			// LIGHTNING && FIRE -> player attacks permanently lower enemy defense
		} else if (
			titans.includes('Lightning Kingdom') &&
			titans.includes('Fire Kingdom')
		) {
			zenscapeType = this.zenscape.plasma;
			zenscapeType.intensity++;
			// METAL && ANYTHING -> player stats get boosted
		} else if (titans.includes('Metal Kingdom')) {
			zenscapeType = this.zenscape.enhance;
			zenscapeType.intensity++;
			// TERRA && FIRE -> player attack gets boosted over time
		} else if (
			titans.includes('Terra Kingdom') &&
			titans.includes('Fire Kingdom')
		) {
			zenscapeType = this.zenscape.blaze;
			zenscapeType.intensity++;
			// WATER && STONE -> player units gain more energy over time
		} else if (
			titans.includes('Water Kingdom') &&
			titans.includes('Stone Kingdom')
		) {
			zenscapeType = this.zenscape.spring;
			zenscapeType.intensity++;
			// AIR && WATER -> enemy attack power is reduced
		} else if (
			titans.includes('Air Kingdom') &&
			titans.includes('Water Kingdom')
		) {
			zenscapeType = this.zenscape.ice;
			zenscapeType.intensity++;
			// LIGHTNING && WATER -> player attacks have splash damage
		} else if (
			titans.includes('Lightning Kingdom') &&
			titans.includes('Water Kingdom')
		) {
			zenscapeType = this.zenscape.storm;
			zenscapeType.intensity++;
			// TERRA && WATER -> slow down enemy units
		} else if (
			titans.includes('Terra Kingdom') &&
			titans.includes('Water Kingdom')
		) {
			zenscapeType = this.zenscape.swamp;
			zenscapeType.intensity++;
			// STONE && AIR -> enemy units regenerate less health
		} else if (
			titans.includes('Stone Kingdom') &&
			titans.includes('Air Kingdom')
		) {
			zenscapeType = this.zenscape.sandstorm;
			zenscapeType.intensity++;
			// STONE && LIGHTNING -> enemy has a small chance of attacking another enemy
		} else if (
			titans.includes('Stone Kingdom') &&
			titans.includes('Lightning Kingdom')
		) {
			zenscapeType = this.zenscape.glare;
			zenscapeType.intensity++;
			// TERRA && STONE -> enemy takes damage after attacking
		} else if (
			titans.includes('Terra Kingdom') &&
			titans.includes('Stone Kingdom')
		) {
			zenscapeType = this.zenscape.thorn;
			zenscapeType.intensity++;
			// AIR && LIGHTNING -> if player attack hits enemy before enemy attacks, the enemy has a smaller chance of attacking
		} else if (
			titans.includes('Air Kingdom') &&
			titans.includes('Lightning Kingdom')
		) {
			zenscapeType = this.zenscape.flash;
			zenscapeType.intensity++;
			// AIR && TERRA -> enemy special effects are lessened
		} else if (
			titans.includes('Air Kingdom') &&
			titans.includes('Terra Kingdom')
		) {
			zenscapeType = this.zenscape.spore;
			zenscapeType.intensity++;
			// LIGHTNING && TERRA -> player attack has small chance to do double damage
		} else if (titans.includes('Lightning Kingdom' && 'Terra Kingdom')) {
			zenscapeType = this.zenscape.crystal;
			zenscapeType.intensity++;
		}

		this.turnNumber++;
		this.currentZenscape = zenscapeType;
	}

	shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
}

// CALCULATIONS BASED ON
//  (((((2 * level / 5) * power * (attack / defense)) / 50 + 2) * modifiers) * trueSkill)

export const session = new Game();

export const calculations = {
	enemyDamageCalc: function enemyDamageCalc(initiator, target, session) {
		let level;
		switch (initiator.Rank) {
			case 'Basic':
				level = 1;
				break;
			case 'Advanced':
				level = 2;
				break;
			case 'Elite':
				level = 3;
				break;
			default:
				level = 1;
		}

		let res =
			(((2 * (level / 5) + 2) *
				initiator.attack *
				(initiator.attack / target.defense)) /
				50 +
				2) *
			session.modifiers *
			session.trueSkill;
		return res;
	},
	playerDamageCalc: function playerDamageCalc(
		initiator,
		target,
		power,
		session
	) {
		let level;

		if (initiator.isTitan) {
			level = 4;
		} else if (initiator.isKingdom) {
			level = 5;
		}
		console.log(session);
		let res =
			(((2 * (level / 5) + 2) *
				power *
				(initiator.attack / target.defense)) /
				50 +
				2) *
			session.modifiers *
			session.trueSkill;
		// IF ZENSCAPE IS CRYSTAL TRY TO DO DAMAGE AGAIN
		if (
			session.currentZenscape.name === 'Crystal' &&
			Math.random() * 100 < session.currentZenscape.intensity
		) {
			res *= 2;
		}
		// IF ZENSCAPE IS PLASMA LOWER TARGET DEFENSE
		if (
			session.currentZenscape.name === 'Plasma' &&
			Math.random() * 100 < session.currentZenscape.intensity
		) {
			target.defense -= session.currentZenscape.intensity
		}
		return res;
	},
	healCalc: function healCalc(initiator, target, power, session) {
		let level;
		if (initiator.isFaang) {
			switch (initiator.Rank) {
				case 'Basic':
					level = 1;
					break;
				case 'Advanced':
					level = 2;
					break;
				case 'Elite':
					level = 3;
					break;
				default:
					level = 1;
			}
		} else if (initiator.isTitan) {
			level = 4;
		} else if (initiator.isKingdom) {
			level = 5;
		}

		let res =
			(((2 * (level / 5) + 2) *
				power *
				(initiator.defense / target.regenerationRate)) /
				50 +
				2) *
			session.modifiers *
			session.trueSkill;
		return res;
	},
};
