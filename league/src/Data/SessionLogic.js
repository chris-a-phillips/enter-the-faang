class Game {
    constructor() {
        this.turnNumber = 0;
        this.eventLog = [];
        this.player = null;
        this.currentTurn = 'player'
        this.trueSkill = 5;
        this.modifiers = 1;

    }

    takeTurn() {
        this.turnNumber ++
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
