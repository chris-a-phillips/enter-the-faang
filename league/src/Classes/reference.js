// crew 6, advanced 3, elite 1

// recruit, apprentice, private, corporal, sergeant, gunnery sergeant, lieutenant, captiain, major, commander, colonel, brigadier general

// master sergeant, first lieutenant, staff captain, field major, strike commander, force colonel, brigadier general, 5-Star general

// regen = all damage taken from weaknesses

function average(numOne, numTwo) {
	let array = [numOne, numTwo];
	return array.reduce((a, b) => (a + b) / array.length);
}

function addAll(array) {
	return array.reduce((a, b) => a + b);
}

let weakArray = [1,1,1,1,8,4,.25];

console.log(average(135,110));
console.log(addAll(weakArray));

const faang = {
	dra: {
		crew: {
			health: 41,
			attack: 89,
			defense: 47.5,
			regeneration: 18.5,
			speed: 50,
			total: 246,
		},
		advanced: {
			health: 61,
			attack: 77,
			defense: 67.5,
			regeneration: 18.5,
			speed: 70,
			total: null,
		},
		elite: {
			health: 91,
			attack: 117,
			defense: 97.5,
			regeneration: 20.25,
			speed: 80,
			total: null,
		},
	},
	tyr: {
		crew: {
			health: 50,
			attack: 54.5,
			defense: 50,
			regeneration: 24.25,
			speed: 41,
			total: null,
		},
		advanced: {
			health: 70,
			attack: 74.5,
			defense: 70,
			regeneration: 24.25,
			speed: 51,
			total: null,
		},
		elite: {
			health: 100,
			attack: 129.5,
			defense: 135,
			regeneration: 23,
			speed: 71,
			total: null,
		},
	},
	sal: {
		crew: {
			health: 45,
			attack: 57.5,
			defense: 45,
			regeneration: 18.5,
			speed: 50,
			total: null,
		},
		advanced: {
			health: 65,
			attack: 77.5,
			defense: 75,
			regeneration: 18.5,
			speed: 50,
			total: null,
		},
		elite: {
			health: 95,
			attack: 122.5,
			defense: 80,
			regeneration: 20.25,
			speed: 100,
			total: null,
		},
	},
	met: {
		crew: {
			health: 40,
			attack: 40,
			defense: 70,
			regeneration: 16.25,
			speed: 30,
			total: null,
		},
		advanced: {
			health: 60,
			attack: 65,
			defense: 90,
			regeneration: 16.25,
			speed: 50,
			total: null,
		},
		elite: {
			health: 80,
			attack: 115,
			defense: 110,
			regeneration: 16.25,
			speed: 70,
			total: null,
		},
	},
	gar: {
		crew: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		advanced: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		elite: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
	},
	hyd: {
		crew: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		advanced: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		elite: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
	},
	goo: {
		crew: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		advanced: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		elite: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
	},
	kom: {
		crew: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		advanced: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		elite: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
	},
	pul: {
		crew: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		advanced: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
		elite: {
			health: null,
			attack: null,
			defense: null,
			regeneration: null,
			speed: null,
			total: null,
		},
	},
};
