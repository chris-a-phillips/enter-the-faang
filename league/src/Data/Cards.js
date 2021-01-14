class Card {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }

    effect() {
        console.log(this.name, 'will do something')
    }
}

const test = new Card('test', 'attack')


export const allCards = [test]