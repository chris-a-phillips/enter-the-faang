class Game {
    constructor() {
        this.turnNumber = 0;
        this.eventLog = [];
        this.player = null;
        this.currentTurn = 'player'
        this.trueSkill = 5;
        this.modifiers = 1;
        this.zenscape = {
            steam: 0,
            // FIRE && WATER -> player field increases regeneration
            lava: 0,
            // STONE && FIRE -> enemy units take damage over time
            smoke: 0,
            // AIR && FIRE -> enemy attacks have chance of missing
            plasma: 0,
            // LIGHTNING && FIRE -> player attacks permanently lower enemy defense
            enhance: 0,
            // METAL && ANYTHING -> player stats get boosted
            blaze: 0,
            // TERRA && FIRE -> player attack gets boosted over time
            mud: 0,
            // WATER && STONE -> slow down enemy units
            ice: 0,
            // AIR && WATER -> enemy attack power is reduced
            storm: 0,
            // LIGHTNING && WATER -> player attacks have splash damage
            swamp: 0,
            // TERRA && WATER -> slow down enemy units
            sandstorm: 0,
            // STONE && AIR -> enemy units regenerate less health
            spark: 0,
            // STONE && LIGHTNING -> enemy has a small chance of attacking another enemy
            thorn: 0,
            // TERRA && STONE -> enemy takes damage after attacking
            flinch: 0,
            // AIR && LIGHTNING -> if player attack hits enemy before they go, they have a smaller chance of attacking
            spore: 0,
            // AIR && TERRA -> enemy special effects are lessened
            crystal: 0,
            // LIGHTNING && TERRA -> player attack has small chance to do double damage
        }

    }

    // endTurn(titanOne, titanTwo) {
    //     const titans = [titanOne, titanTwo]
    //     switch (titanOne, titanTwo) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    //     this.turnNumber ++
    // }

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
