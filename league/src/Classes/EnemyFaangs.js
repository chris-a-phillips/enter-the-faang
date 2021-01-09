export class BaseUnit {
	constructor(name, health, attack, defense, regeneration, speed) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.defense = defense;
		this.regeneration = regeneration;
		this.speed = speed;
	}
	attackUnit(unit) {
		console.log(
			`${this.name} attacked ${unit.name} and now it has ${unit.health}`
		);
		unit.health -= this.attack;
	}
}

export class Admin extends BaseUnit {
	constructor(name, health, attack, defense, regeneration, speed) {
		super(name, health, attack, defense, regeneration, speed);
		this.isAdmin = true;
	}
	static TYPE_ADMIN = 'admin';
	defendAgainst(unit) {
		console.log(`${this.name} defended against ${unit.name}`);
	}
}

export class BasicFaang {
	constructor(name, health, attack, defense, regeneration, speed, rank) {
		// specs
		this.isAlive = true;
		this.rank = rank
		// stats
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.defense = defense;
		this.regeneration = regeneration;
		this.speed = speed;
	}
	speak() {
		console.log(this.name);
	}
}

class AdvancedFaang extends BasicFaang {
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

export const crew = new BasicFaang('Crew')
export const advanced = new AdvancedFaang('Advanced')
export const elite = new EliteFaang('Elite')