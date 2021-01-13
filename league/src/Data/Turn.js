export class Turn {
    constructor() {
        this.number = 0
    }

    takeTurn() {
        console.log(this.number)
        this.number += 1
    }
}

export const rounds = new Turn()
