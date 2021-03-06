import { calculations, session } from '../Data/SessionLogic'

class Card {
    constructor(name, strength, energy) {
        this.name = name;
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
	constructor(name, strength, energy) {
        super(name, strength, energy);
        // SPECIFIC TO THIS CLASS
        this.type = 'Attack'
        this.colors = {
			primary: '#FFA936',
			secondary: '#806441',
		};
        this.description = `Deals damage to the enemy with ${this.strength} power.`;
	}
	effect(initiator, target) {
        let percent
        this.speed = initiator.speed
        // IF INITIATOR HAS ENOUGH ENERGY AND HAS A VALID TARGET
        if (initiator !== target && initiator.energy >= this.energy && initiator.isAlive) {
			// DO DAMAGE
			target.currentHealth -= calculations.playerDamageCalc(
				initiator,
				target,
				this.strength,
				session
			);
			// USE THIS CARD SO IT IS SPLICED
			this.isUsed = true;
			// SUBTRACT ENERGY COST
			initiator.energy -= this.energy;
			if (target.currentHealth <= 0) {
				target.isAlive = false;
			}
			// CALCULATE PERCENTAGE FOR DISPLAY
			percent = Math.ceil(
				(target.currentHealth / target.maxHealth) * 100
			);
			// IF ZENSCAPE IS FLASH ADD FLASH STATUS TO THEM
			if (
				session.currentZenscape.name === 'Flash' &&
				Math.random() * 100 < session.currentZenscape.intensity
			) {
				target.status.flash = true
			}
		}
        // IF INITIATOR IS TARGET CHOOSE NEW TARGET
            if (initiator === target) {
                console.log('CHOOSE NEW TARGET');
            }
            // IF INITIATOR DOES NOT HAVE ENOUGH ENERGY THIS CAN'T BE USED
            if (initiator.energy < this.energy) {
                console.log('THIS TITAN DOES NOT HAVE ENOUGH ENERGY');
            }
            // RESET ENERGY (WILL PROBABLY CHANCE)
            initiator.energy = initiator.showcase.energy
            // IF TARGET DIED FROM ATTACK
            if (target.currentHealth <= 0) {
                target.isAlive = false
                return {
					event: `card ${this.name} was used by ${initiator.name} to attack ${target.name} and it was defeated`,
					bgColor: initiator.showcase.colors.secondary,
					color: '#000',
                };
                // IF TARGET DID NOT DIE FROM THE ATTACK
            } else return {
				event: `card ${this.name} was used by ${initiator.name} to attack ${target.name} and now it has ${percent}% health remaining`,
				bgColor: initiator.showcase.colors.secondary,
                color: '#000',
                border: 'red'
			};
	}
}

class HealCard extends Card {
	constructor(name, strength, energy) {
		super(name, strength, energy);
        // SPECIFIC TO THIS CLASS
        this.type = 'Heal'
		this.colors = {
			primary: '#51A3A3',
			secondary: '#387070',
		};
        this.description = `Heals the target with ${this.strength} power.`;
	}
	effect(initiator, target) {
        let percent
        this.speed = initiator.speed;
        let res = null
        if (target.isFaang) {
            console.log('CHOOSE NEW TARGET')
        }
		if (initiator !== target && initiator.energy >= this.energy && !target.isFaang) {
			this.isUsed = true;
            initiator.energy -= this.energy;
            // calculations.healCalc(initiator, target, this.strength, session)
            if (initiator.isAlive && target.isAlive) {
                if (
					(target.currentHealth +
						calculations.healCalc(
							initiator,
							target,
							this.strength,
							session
						)) >
					target.maxHealth
				) {
					target.currentHealth = target.maxHealth;
				} else {
                    target.currentHealth += (calculations.healCalc(
                        initiator,
						target,
						this.strength,
						session
                        ))
                    }
                percent = Math.ceil(
                    (target.currentHealth / target.maxHealth) * 100
                );
                res = `${initiator.name} used Card ${this.name} to heal ${target.name}, and now it has ${percent}% health remaining`
                console.log(initiator)
            } else res = `${initiator.name} used Card ${this.name} in an attempt to heal ${target.name}, but it was defeated before it could be healed`;
		}
		if (initiator === target) {
			console.log('CHOOSE NEW TARGET');
		}
		if (initiator.energy < this.energy) {
			console.log('THIS TITAN DOES NOT HAVE ENOUGH ENERGY');
		}
        initiator.energy = initiator.showcase.energy;
        console.log('INITIATOR:', initiator.showcase)
            return {
				event: res,
				bgColor: initiator.showcase.colors.secondary,
                color: '#000',
                border: 'green'
			};
	}
}

class SupportCard extends Card {
	constructor(name, type, strength, energy) {
		super(name, type, strength, energy);
        // SPECIFIC TO THIS CLASS
        this.type = 'Support'
		this.colors = {
			primary: '#DD7373',
			secondary: '#A35555',
		};
		this.description = `Heals the target with ${this.strength} power.`;
	}
	effect(initiator, target) {
		this.speed = initiator.speed;
		if (initiator !== target && initiator.energy >= this.energy) {
			this.isUsed = true
            console.log('it works')
		}

		if (initiator === target) {
			console.log('CHOOSE NEW TARGET');
		}
		if (initiator.energy < this.energy) {
			console.log('THIS TITAN DOES NOT HAVE ENOUGH ENERGY');
		}
        initiator.energy = initiator.showcase.energy;
            return {
                event: '======= FIGURE OUT WHAT THE SUPPORTS DO =======',
                color: this.colors.secondary,
            };
	}
}

const aTest = new AttackCard('a test', 1, 1)
const aTest2 = new AttackCard('a test2', 2, 2)
const aTest3 = new AttackCard('a test3', 3, 3)
const aTest4 = new AttackCard('a test4', 4, 4)
const aTest5 = new AttackCard('a test5', 5, 5)
const aTest6 = new AttackCard('a test6', 6, 6)
const aTest7 = new AttackCard('a test7', 7, 7)
const hTest = new HealCard('h test', 1, 1)
const hTest2 = new HealCard('h test2', 2, 2)
const hTest3 = new HealCard('h test3', 3, 3)
const hTest4 = new HealCard('h test4', 4, 4)
const hTest5 = new HealCard('h test5', 5, 5)
const hTest6 = new HealCard('h test6', 6, 6)
const hTest7 = new HealCard('h test7', 7, 7)
const sTest = new SupportCard('s test', 1, 1)
const sTest2 = new SupportCard('s test2', 2, 2)
const sTest3 = new SupportCard('s test3', 3, 3)
const sTest4 = new SupportCard('s test4', 4, 4)
const sTest5 = new SupportCard('s test5', 5, 5)
const sTest6 = new SupportCard('s test6', 6, 6)
const sTest7 = new SupportCard('s test7', 7, 7)

export const fullDeck = [
    // 1
	aTest,
    hTest,
    // sTest,
    // 2
	aTest2,
    hTest2,
    // sTest2,
    // 3
	aTest3,
    hTest3,
    // sTest3,
    // 4
	aTest4,
    hTest4,
    // sTest4,
    // 5
	aTest5,
    hTest5,
    // sTest5,
    // 6
	aTest6,
    hTest6,
    // sTest6,
    //7
	aTest7,
    hTest7,
    // sTest7
];

export const allCards = session.shuffle(fullDeck)