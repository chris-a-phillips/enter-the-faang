class Game {
    constructor() {
        this.turnNumber = 0;
        this.eventLog = [];
        this.player = null;
        this.currentTurn = 'player'
        this.trueSkill = 8;
        this.modifiers = 1;

    }

    takeTurn() {
        this.turnNumber ++
    }
}

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
        
         return ((((2 * (level / 5) + 2) * initiator.attack * (initiator.attack / target.defense)) / 50 + 2) * session.modifiers) * session.trueSkill
    },
    playerDamageCalc: function playerDamageCalc(initiator, target, power, session) {
        let level

        if (initiator.isTitan) {
            level = 4
        } else if (initiator.isKingdom) {
            level = 5
        }
        console.log('============')
        console.log('level:', level)
        console.log('power:', power)
        console.log('initiator.attack:', initiator.attack)
        console.log('target.defense:', target.defense)
        console.log('session.modifiers:', session.modifiers)
        console.log('session.trueSkill:', session.trueSkill)
        console.log('============')
         return ((((2 * (level / 5) + 2) * power * (initiator.attack / target.defense)) / 50 + 2) * session.modifiers) * session.trueSkill
    }
}
