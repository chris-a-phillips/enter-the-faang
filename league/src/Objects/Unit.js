export class Unit {
    constructor(health, attack, defense) {
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    attackUnit(unit) {
        this.attack -= unit.health
    }
}

export const blueUnit = new Unit(100, 25, 30)

export const redUnit = new Unit(100, 25, 30)