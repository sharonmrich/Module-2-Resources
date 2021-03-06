
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`hi my name is ${this.name}`);
	}
}


class Cat extends Animal {

	speak() {
		console.log(`${this.name} meows`);
	}
}



class Dog extends Animal {
	constructor(name, age) {
		super(name, age)
		this.tricks = [];
	}

	speak() {
		console.log(`${this.name} barks`);
	}

	learnNewTrick(trick) {
		this.tricks.push(trick);
		console.log(`New trick learned: ${trick}`)
	}

	performTricks() {
		this.tricks.forEach(trick => {
			console.log(`${this.name} performs trick: ${trick}`)
		})
	}
}