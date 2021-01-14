class Card {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }


}

class AttackCard extends Card {
	constructor(name, type) {
		super(name);
		this.type = type;
	}
	effect(initiator, target) {
        if (initiator !== target) {
            target.health -= initiator.attack;
            console.log(
                `card ${this.name} was used by ${initiator.name} to attack ${target.name} and now it has ${target.health} health remaining`
                );
                if (target.health <= 0) {
                    target.isAlive = false;
                    console.log(`${target.name} died from the attack`);
                }
            } else {
                console.log('CHOOSE NEW TARGET');
            }
	}
}

const test = new AttackCard('test', 'attack')


export const allCards = [test]