class Card {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.isUsed = false;
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
            this.isUsed = true
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
const test2 = new AttackCard('test2', 'attack')
const test3 = new AttackCard('test3', 'attack')
const test4 = new AttackCard('test4', 'attack')
const test5 = new AttackCard('test5', 'attack')
const test6 = new AttackCard('test6', 'attack')
const test7 = new AttackCard('test7', 'attack')
const test8 = new AttackCard('test8', 'attack')
const test9 = new AttackCard('test9', 'attack')
const test10 = new AttackCard('test10', 'attack')


export const allCards = [test, test2, test3, test4, test5, test6, test7, test8, test9, test10]