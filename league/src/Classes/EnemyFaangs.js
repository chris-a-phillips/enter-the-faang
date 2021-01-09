export class BaseUnit {
	constructor(name, health, attack, defense) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.defense = defense;
	}
	attackUnit(unit) {
		console.log(
			`${this.name} attacked ${unit.name} and now it has ${unit.health}`
		);
		unit.health -= this.attack;
	}
}

export class Admin extends BaseUnit {
	constructor(name, health, attack, defense) {
		super(name, health, attack, defense);
		this.isAdmin = true;
	}
	static TYPE_ADMIN = 'admin';
	defendAgainst(unit) {
		console.log(`${this.name} defended against ${unit.name}`);
	}
}


class CrewFaang {
	constructor(name) {
		this.name = name
		this.class = 'Crew'
		this.isAlive = true
		this.health = null
		this.attack = null
		this.defense = null
		this.regeneration = null
		this.speed = null
	}
	speak() {
		console.log(this.name)
	}
}

class AdvancedFaang extends CrewFaang {
	constructor(name) {
		super(name);
		this.attack = 'infinite'
		this.isAdmin = true;
		this.class = 'Advanced'
	}
}

class EliteFaang extends AdvancedFaang {
	constructor(name) {
		super(name)
		this.defense = 'alla dat'
		this.class = 'Elite'
	}
}

export const crew = new CrewFaang('Crew')
export const advanced = new AdvancedFaang('Advanced')
export const elite = new EliteFaang('Elite')