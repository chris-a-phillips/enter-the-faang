class Game {
    constructor() {
        this.turnNumber = 0;
        this.eventLog = [];
        this.player = null;
        this.currentTurn = 'player'
        this.trueSkill = 5;
        this.modifiers = 1;
        this.zenscape = {
            // FIRE && WATER -> player field increases regeneration
            steam: {
                name: 'Steam',
                intensity: 0
            },
            // STONE && FIRE -> enemy units take damage over time
            lava: {
                name: 'Lava',
                intensity: 0
            },
            // AIR && FIRE -> enemy attacks have chance of missing
            smoke: {
                name: 'Smoke',
                intensity: 0
            },
            // LIGHTNING && FIRE -> player attacks permanently lower enemy defense
            plasma: {
                name: 'Plasma',
                intensity: 0
            },
            // METAL && ANYTHING -> player stats get boosted
            enhance: {
                name: 'Enhance',
                intensity: 0
            },
            // TERRA && FIRE -> player attack gets boosted over time
            blaze: {
                name: 'Blaze',
                intensity: 0
            },
            // WATER && STONE -> slow down enemy units
            mud: {
                name: 'Mud',
                intensity: 0
            },
            // AIR && WATER -> enemy attack power is reduced
            ice: {
                name: 'Ice',
                intensity: 0
            },
            // LIGHTNING && WATER -> player attacks have splash damage
            storm: {
                name: 'Storm',
                intensity: 0
            },
            // TERRA && WATER -> slow down enemy units
            swamp: {
                name: 'Swamp',
                intensity: 0
            },
            // STONE && AIR -> enemy units regenerate less health
            sandstorm: {
                name: 'Soandstorm',
                intensity: 0
            },
            // STONE && LIGHTNING -> enemy has a small chance of attacking another enemy
            spark: {
                name: 'Spark',
                intensity: 0
            },
            // TERRA && STONE -> enemy takes damage after attacking
            thorn: {
                name: 'Thorn',
                intensity: 0
            },
            // AIR && LIGHTNING -> if player attack hits enemy before enemy attacks, the enemy has a smaller chance of attacking
            flinch: {
                name: 'Flinch',
                intensity: 0
            },
            // AIR && TERRA -> enemy special effects are lessened
            spore: {
                name: 'Spore',
                intensity: 0
            },
            // LIGHTNING && TERRA -> player attack has small chance to do double damage
            crystal: {
                name: 'Crystal',
                intensity: 0
            },
        }

    }

    endTurn(titanOne, titanTwo) {
        const titans = [titanOne.kingdom, titanTwo.kingdom]
        let zenscapeType
        
        // FIRE && WATER -> player field increases regeneration
        if (titans.includes('Water Kingdom' && 'Fire Kingdom')) {
            zenscapeType = this.zenscape.steam;
            // STONE && FIRE -> enemy units take damage over time
        } else if (titans.includes('Water Kingdom' && 'Fire Kingdom')) {
            zenscapeType = this.zenscape.lava
            // AIR && FIRE -> enemy attacks have chance of missing
        } else if (titans.includes('Air Kingdom' && 'Fire Kingdom')) {
            zenscapeType = this.zenscape.smoke
            // LIGHTNING && FIRE -> player attacks permanently lower enemy defense
        } else if (titans.includes('Lightning Kingdom' && 'Fire Kingdom')) {
            zenscapeType = this.zenscape.plasma
            // METAL && ANYTHING -> player stats get boosted
        } else if (titans.includes('Metal Kingdom')) {
            zenscapeType = this.zenscape.enhance
            // TERRA && FIRE -> player attack gets boosted over time
        } else if (titans.includes('Terra Kingdom' && 'Fire Kingdom')) {
            zenscapeType = this.zenscape.blaze
            // WATER && STONE -> slow down enemy units
        } else if (titans.includes('Water Kingdom' && 'Stone Kingdom')) {
            zenscapeType = this.zenscape.mud
            // AIR && WATER -> enemy attack power is reduced
        } else if (titans.includes('Air Kingdom' && 'Water Kingdom')) {
            zenscapeType = this.zenscape.ice
            // LIGHTNING && WATER -> player attacks have splash damage
        } else if (titans.includes('Lightning Kingdom' && 'Water Kingdom')) {
            zenscapeType = this.zenscape.storm
            // TERRA && WATER -> slow down enemy units
        } else if (titans.includes('Terra Kingdom' && 'Water Kingdom')) {
            zenscapeType = this.zenscape.swamp
            // STONE && AIR -> enemy units regenerate less health
        } else if (titans.includes('Stone Kingdom' && 'Air Kingdom')) {
            zenscapeType = this.zenscape.sandstorm
            // STONE && LIGHTNING -> enemy has a small chance of attacking another enemy
        } else if (titans.includes('Stone Kingdom' && 'Lightning Kingdom')) {
            zenscapeType = this.zenscape.spark
            // TERRA && STONE -> enemy takes damage after attacking
        } else if (titans.includes('Terra Kingdom' && 'Stone Kingdom')) {
            zenscapeType = this.zenscape.thorn
            // AIR && LIGHTNING -> if player attack hits enemy before enemy attacks, the enemy has a smaller chance of attacking
        } else if (titans.includes('Air Kingdom' && 'Lightning Kingdom')) {
            zenscapeType = this.zenscape.flinch
            // AIR && TERRA -> enemy special effects are lessened
        } else if (titans.includes('Air Kingdom' && 'Terra Kingdom')) {
            zenscapeType = this.zenscape.spore
            // LIGHTNING && TERRA -> player attack has small chance to do double damage
        } else if (titans.includes('Lightning Kingdom' && 'Terra Kingdom')) {
            zenscapeType = this.zenscape.crystal
        }

        this.turnNumber ++
        console.log(zenscapeType)
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

export const session = new Game()
export const calculations = {
    enemyDamageCalc: function enemyDamageCalc(initiator, target, session) {
        let level
        switch (initiator.Rank) {
            case 'Basic':
                level = 1
                break;
            case 'Advanced':
                level = 2
                break;
            case 'Elite':
                level = 3
                break;
            default:
            level = 1
        }
        
        let res = ((((2 * (level / 5) + 2) * initiator.attack * (initiator.attack / target.defense)) / 50 + 2) * session.modifiers) * session.trueSkill
        return res
    },
    playerDamageCalc: function playerDamageCalc(initiator, target, power, session) {
        let level

        if (initiator.isTitan) {
            level = 4
        } else if (initiator.isKingdom) {
            level = 5
        }
        let res = ((((2 * (level / 5) + 2) * power * (initiator.attack / target.defense)) / 50 + 2) * session.modifiers) * session.trueSkill
        return res
    },
    healCalc: function healCalc(initiator, target, power, session) {
        let level
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
            level = 4
        } else if (initiator.isKingdom) {
            level = 5
        }

        console.log('=======')
        console.log('level:', level)
        console.log('power:', power)
        console.log('initiator.defense:', initiator.defense)
        console.log('target.regeneration:', target.regeneration)
        console.log('session.modifiers:', power)
        console.log('session.trueSkill:', session.trueSkill)
        
        let res = ((((2 * (level / 5) + 2) * power * (initiator.defense / target.regeneration)) / 50 + 2) * session.modifiers) * session.trueSkill
        console.log('res:', res)
        console.log('=======')
        return res
    }
}
