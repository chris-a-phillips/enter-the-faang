class Card {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }

    effect(initiator, target) {
        console.log('NOOOOOOOOO', initiator, target)
    }
}

const test = new Card('test', 'attack')


export const allCards = [test]