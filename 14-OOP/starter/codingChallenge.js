///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;

  // this.accelerate = function () {
  //   const acc = Number.parseInt(this.speed) + 10;
  //   console.log(acc);
  // };
  // this.brake = function () {
  //   const brake = Number.parseInt(this.speed) - 5;
  //   console.log(brake);
  // };
};

Car.prototype.accelerate = function () {
  const acc = Number.parseInt(this.speed) + 10;
  console.log(`${this.make} going at ${Number.parseInt(this.speed) + 10} km/h`);
};
Car.prototype.brake = function () {
  const brake = Number.parseInt(this.speed) - 5;
  console.log(`${this.make} going at ${Number.parseInt(this.speed) - 5} km/h`);
};

const carBMW = new Car('BMW', '120 km/h');
const carMercedes = new Car('Mercedes', '95 km/h');
console.log(carBMW);
console.log(carMercedes);
carBMW.accelerate();
carBMW.accelerate();
carBMW.accelerate();
carBMW.brake();
carMercedes.accelerate();
carMercedes.brake();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/* 
class Car {
  constructor(make, speed, speedType) {
    this.make = make;
    this.speed = speed;
    this.speedType = speedType;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  get speedUS() {
    return (this.speed /= 1.6);
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `${this.make} going at ${Number.parseInt(speedAcc) + 10} ${
        this.speedType
      }`
    );
  }
  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} going at ${Number.parseInt(speedBrake) + 10} ${
        this.speedType
      }`
    );
  }
}

const carBMW = new Car('BMW', 120, 'km/h');
const carMercedes = new Car('BMW', 95, 'km/h');
// carBMW.accelerate();
// carBMW.brake();
// carMercedes.accelerate();
// carMercedes.brake();

console.log(carBMW.speedUS);
console.log((carBMW.speedUS = 100));
console.log(carBMW);
 */

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Speed increased to ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
EV.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
  console.log(chargeTo);
};

const BMW = new EV('BMW', 90, 50);
console.log(BMW);
BMW.accelerate();

BMW.brake();

// Car.__proto__ => Object.prototype
// EV.__proto__ => Car.prototype
// BMW.__proto__ => EV.prototype
// DOUBT
// console.log(EV.__proto__ === Car.prototype);
// console.log(BMW.__proto__ === EV.prototype);
 */

///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
*/
/*
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 100;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 100;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

class EVCl extends CarCl {
  #batteryCharge;
  constructor(make, speed, batteryCharge) {
    super(make, speed);
    this.#batteryCharge = batteryCharge;
  }
  chargeBattery(chargeTo) {
    this.#batteryCharge = `${chargeTo}%`;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#batteryCharge = `${
      Number.parseInt(this.#batteryCharge) * (1 / 100)
    }%`;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#batteryCharge
      }`
    );
    return this;
  }
  brake() {
    this.speed -= 10;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#batteryCharge
      }`
    );
  }
  get speedUs() {
    return `${this.speed}%`;
  }
  set speedUs(speed) {
    return `${(this.speed = speed)}%`;
  }
}

const toy = new EVCl('toy', 230, '50%');
toy.accelerate();
toy.chargeBattery(10);
// console.log(toy.#batteryCharge);
// console.log(toy.batteryCharge);
toy.brake();
console.log(toy);
console.log(toy.speedUs);
toy.speedUs = 230;

console.log(toy.speedUs);
