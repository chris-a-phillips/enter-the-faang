class Card {
    constructor(name, type, energy) {
        this.name = name;
        this.type = type;
        this.isUsed = false;
    }


}

class AttackCard extends Card {
	constructor(name, type, strength, energy) {
		super(name, type);
        this.type = type;
        this.strength = strength;
        this.energy = energy;
	}
	effect(initiator, target) {
        if (initiator !== target && initiator.energy >= this.energy) {
            target.health -= initiator.attack;
            this.isUsed = true
            initiator.energy -= this.energy
            console.log(
                `card ${this.name} was used by ${initiator.name} to attack ${target.name} and now it has ${target.health} health remaining`
                );
                if (target.health <= 0) {
                    target.isAlive = false;
                    console.log(`${target.name} died from the attack`);
                }
            }
            
        if(initiator === target) {
                console.log('CHOOSE NEW TARGET');
            }
        if (initiator.energy < this.energy) {
                console.log('THIS TITAN DOES NOT HAVE ENOUGH ENERGY');
			}
            initiator.energy = initiator.showcase.energy
	}
}

const test = new AttackCard('test', 'attack', 1, 1)
const test2 = new AttackCard('test2', 'attack', 2, 2)
const test3 = new AttackCard('test3', 'attack', 3, 3)
const test4 = new AttackCard('test4', 'attack', 4, 4)
const test5 = new AttackCard('test5', 'attack', 5, 5)
const test6 = new AttackCard('test6', 'attack', 6, 6)
const test7 = new AttackCard('test7', 'attack', 7, 7)
const test8 = new AttackCard('test8', 'attack', 8, 8)
const test9 = new AttackCard('test9', 'attack', 9, 9)
const test10 = new AttackCard('test10', 'attack', 10, 10)


export const allCards = [test, test2, test3, test4, test5, test6, test7, test8, test9, test10]