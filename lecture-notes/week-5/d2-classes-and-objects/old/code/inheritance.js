// INHERITANCE

// defining parent class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showAttributes() {
    return `name: ${this.name}, age: ${this.age}`
  }

  speak() {
    return `my name is ${this.name}`
  }
}

// defining a child class

class Dog extends Animal {
  constructor(name, age, color) {
    // super keyword calls constructor() method in parent class
    super(name, age);
    this.color = color;
  }

  // speak() {
  //   return `Woof my name is ${this.name}`
  // }

  speak() {
    // can invoke base-class version of overwritten func using super.methodName()
    const oldSpeak = super.speak(); // my name is bob
    return `Woof woof ${oldSpeak}`
  }
}

let dog = new Dog('bob', 10, 'brown');
console.log(dog.speak()) // Woof woof my name is bob

// console.log(dog.showAttributes())

// note 
// - use of `this`
// - overriding methods in parent class

// --------------------------------------------------------------------------------------------------------

// UNDERSTANDING HOW INHERITANCE WORKS
// - implemented using prototypes

// verify `Dog` and `Animal `Function` objects
console.log(Animal instanceof Function) // true
console.log(Dog instanceof Function) // true

// underlying func for Dog has `prototype` property
// object referenced by `Dog.prototype` is used to set prototype for every instance
let pup = new Dog('Fido', 6, 'brown');
console.log(Object.getPrototypeOf(pup) === Dog.prototype) // true

// Dog inherits from Animal class
// object referenced by Dog.prototype will have its prototype set to the Animal.prototype property
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype) // true

// dunder proto 
console.log(Dog.prototype.__proto__ === Animal.prototype) // true

// prototype chain
// - relationship between Dog instance, Dog.prototype property and the Animal.prototype property
// - doesnt end here
// - object referenced by the Animal.prototype property has its prototype set to the Object.prototype property which is base prototype for all objects
console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype) // true

// prototype is object thats delegated to when a property or method cant be found on an object
//  - a class hierarchy defines a prototype chain

console.log(pup.showAttributes())

// the following occurs when we call showAttributes():
// 1. JS looks for showAttributes() method on `pup` object
// 2. when methid isn't found, method call is delegated to `pup` object's [[prototype]] (obj referenced by Dog.prototype property)
// 3. when method isn't found again, method call id delegated to Dog.prototype property object's [[prototype]] (obj referenced by Animal.prototype property)
// 4. this time method is found and successfully called with `this` set to `pup` object


