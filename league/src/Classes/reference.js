class Car {
	constructor(body, make, model) {
		this.body = body;
		this.make = make;
		this.model = model;
		this.available = true;
		this.mileage = 0;
	}
	bookReservation() {
		return (this.available = false);
	}
	returnVehicle() {
		return (this.available = true);
	}
	drive(milesDriven) {
		return (this.mileage += milesDriven);
	}
}

const jetta = new Car('sedan', 'Volkswagen', 'Jetta');

class User {
	constructor(name, username) {
		this.name = name;
		this.username = username;
	}
	login() {
		'you are logged in';
	}
}

///// INHERITANCE /////

class Admin extends User {
	constructor(name, username) {
		super(name, username);
		this.isAdmin = true;
	}
}

/// extends makes the magic happen ///
const admin = new Admin('Chris', 'Finesse');
const user = new User('Broke', 'Boi');
