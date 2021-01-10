import { faang } from './FaangStats'

const eliteStats = faang.elite

const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

function averageStats(object) {
    // TURN THE OBJECT INTO AN ARRAY OF OBJECTS
    let data = Object.entries(object)
    // CREATE AN ARRAY FOR MAPPED DATA TO GO INTO
    let dataArray = []
    // CREATE AN OBJECT TO HOLD ALL STATS FROM MAPPED ARRAY
    let statsObject = {
        health: [],
        attack: [],
        defense: [],
        regeneration: [],
        speed: [],
        total: [],
    }
    // PUSH SEPARATE DATA SO IT CAN BE MUTATED
    data.map(e => {
        dataArray.push(e[1])
    })
    // PUSH ALL STATS INTO STATS OBJECT
    for (let i = 0; i < dataArray.length; i++) {
        // console.log(dataArray[i])
        statsObject.health.push(dataArray[i].health)
        statsObject.attack.push(dataArray[i].attack)
        statsObject.defense.push(dataArray[i].defense)
        statsObject.regeneration.push(dataArray[i].regeneration)
        statsObject.speed.push(dataArray[i].speed)
        statsObject.total.push(dataArray[i].total)
    }

    // REDUCE ALL STATS IN EACH ARRAY INTO ONE VALUE
    // health
    statsObject.health = statsObject.health.reduce((a, b) => a + b, 0) / statsObject.health.length
    // attack
    statsObject.attack = statsObject.attack.reduce((a, b) => a + b, 0) / statsObject.attack.length
    // defense
    statsObject.defense = statsObject.defense.reduce((a, b) => a + b, 0) / statsObject.defense.length
    // regeneration
    statsObject.regeneration = statsObject.regeneration.reduce((a, b) => a + b, 0) / statsObject.regeneration.length
    // speed
    statsObject.speed = statsObject.speed.reduce((a, b) => a + b, 0) / statsObject.speed.length
    // total
    statsObject.total = statsObject.total.reduce((a, b) => a + b, 0) / statsObject.total.length
    console.log(statsObject)
}
// console.log(eliteStats);
console.log(averageStats(eliteStats))


class Titan {
	constructor(name, health, attack, defense, regeneration, speed, energy) {
		// specs
		this.isAlive = true;
		// stats
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.defense = defense;
		this.regeneration = regeneration;
		this.speed = speed;
		this.energy = energy;
	}
	speak() {
		console.log(this.name);
	}
	attackUnit(unit) {
		console.log(
			`${this.name} attacked ${unit.name} and now it has ${unit.health}`
		);
		unit.health -= this.attack;
	}
}

export const titanOne = new Titan('Fla', 5, 9, 4, 7, 8, 5);

const data = [80,405.75,]

const sum = (arr) => arr.reduce((a, b) => a + b, 0)




// console.log(sum(data))
// console.log(average(data))

const stats = {
    // health: 91,
    // attack: 112,
    // defense: 97,
    // regen: 20,
    // speed: ,
    // total: ,
}
