class Card {
    constructor(name, type, strength, energy) {
        this.name = name;
        this.type = type;
        this.strength = strength;
        this.energy = energy;
        this.isUsed = false;
    }

}
// HEX COLORS
// ATTACK = #FFA936, #806441
// DEFENSE = #51A3A3, #387070
// SUPPORT = #DD7373, #A35555
class AttackCard extends Card {
	constructor(name, type, strength, energy) {
        super(name, type, strength, energy);
        // SPECIFIC TO THIS CLASS
        this.colors = {
			primary: '#FFA936',
			secondary: '#806441',
		};
        this.description = `Deals damage to the enemy with ${this.strength} power.`;
	}
	effect(initiator, target) {
        this.speed = initiator.speed
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

class DefendCard extends Card {
	constructor(name, type, strength, energy) {
		super(name, type, strength, energy);
		// SPECIFIC TO THIS CLASS
		this.colors = {
			primary: '#51A3A3',
			secondary: '#387070',
		};
		this.description = `Heals the target with ${this.strength} power.`;
	}
	effect(initiator, target) {
		this.speed = initiator.speed;
		if (initiator !== target && initiator.energy >= this.energy) {
			target.health += initiator.defense;
			this.isUsed = true;
			initiator.energy -= this.energy;
			console.log(
				`card ${this.name} was used by ${initiator.name} to heal ${target.name} and now it has ${target.health} health remaining`
			);
			// if (target.health <= 0) {
			// 	target.isAlive = false;
			// 	console.log(`${target.name} died from the attack`);
			// }
		}

		if (initiator === target) {
			console.log('CHOOSE NEW TARGET');
		}
		if (initiator.energy < this.energy) {
			console.log('THIS TITAN DOES NOT HAVE ENOUGH ENERGY');
		}
		initiator.energy = initiator.showcase.energy;
	}
}

const aTest = new AttackCard('test', 'attack', 1, 1)
const aTest2 = new AttackCard('test2', 'attack', 2, 2)
const aTest3 = new AttackCard('test3', 'attack', 3, 3)
const aTest4 = new AttackCard('test4', 'attack', 4, 4)
const aTest5 = new AttackCard('test5', 'attack', 5, 5)
const aTest6 = new AttackCard('test6', 'attack', 6, 6)
const aTest7 = new AttackCard('test7', 'attack', 7, 7)
const dTest = new DefendCard('test', 'defend', 1, 1)
const dTest2 = new DefendCard('test2', 'defend', 2, 2)
const dTest3 = new DefendCard('test3', 'defend', 3, 3)
const dTest4 = new DefendCard('test4', 'defend', 4, 4)
const dTest5 = new DefendCard('test5', 'defend', 5, 5)
const dTest6 = new DefendCard('test6', 'defend', 6, 6)
const dTest7 = new DefendCard('test7', 'defend', 7, 7)



export const allCards = [
	aTest,
	aTest2,
	aTest3,
	aTest4,
	aTest5,
	aTest6,
	aTest7,
	dTest,
	dTest2,
	dTest3,
	dTest4,
	dTest5,
	dTest6,
	dTest7,
];