export class Unit {
    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
    attackUnit(unit) {
        console.log(`${this.name} attacked ${unit.name} and now it has ${unit.health}`)
        unit.health -= this.attack
    }
}

export class Admin extends Unit {
	constructor(name, health, attack, defense) {
		super(name, health, attack, defense);
        this.isAdmin = true;
        
    }
    static TYPE_ADMIN = 'admin';
    defendAgainst(unit) {
        console.log(`${this.name} defended against ${unit.name}`)
    }
}

export const yellowUnit = new Admin('yellow', 200, 50, 60)

export const blueUnit = new Unit('blue', 100, 25, 30)

export const redUnit = new Unit('red', 100, 25, 30)


export class Player{
    constructor(name, team) {
        this.name = name
        this.team = team
    }
    speak() {
        console.log(this.name)
    }
    listTeam() {
        console.log(this.team)
    }
}

export const yaboi = new Player('yaboiii', ([blueUnit, redUnit, yellowUnit]))