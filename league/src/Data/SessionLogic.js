class Game {
    constructor() {
        this.turnNumber = 0;
        this.eventLog = [];
        this.player = null;
        this.currentTurn = 'player'
    }

    takeTurn() {
        this.turnNumber ++
    }
}

export const session = new Game()

const calculations = {
    damage: function name(params) {
        
    }
}