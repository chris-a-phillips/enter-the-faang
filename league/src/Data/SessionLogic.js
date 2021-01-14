class Game {
    constructor() {
        this.turnNumber = 0;
        this.events = [];
        this.player = null;
        this.currentTurn = 'player'
    }

    takeTurn() {
        this.turnNumber ++
    }
}

export const session = new Game()