class Game {
    constructor() {
        this.number = 0;
        this.events = [];
        this.player = null;
        this.currentTurn = 'player'
    }

    takeTurn() {
        this.number ++
    }
}

export const session = new Game()