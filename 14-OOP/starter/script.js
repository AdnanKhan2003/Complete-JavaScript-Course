'use strict';

/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // It is convention to use the property name same as parameters

  /// DON"T do this
  // this.calcAge = function (){
  //   console.log(2037-this.birthYear);
  // }
};

const adnan = new Person('adnan', 2003);
const arman = new Person('arman', 2003);
const ayaan = new Person('ayaan', 2003);
 */

// These abjects are the of 'person' type
// console.log(adnan, arman, ayaan);

// 1. The new empty object is created
// 2. Function is called, this =  object
// 3. Object is linked to prototype
// 4. Function automatically returns object (which was created in the beginning)

// console.log(adnan instanceof Person);

// PROTOTYPES
// The constructor function is basically a blueprint(prototype) from which we created as many objects(instance) as possible
// Every function is object and every object has a special property prototype. So that's why the constructor function also has a prototype property which contains all the methods and properties that can be inherited by all the instantiated class through the constructor function with the help of prototypal inheritance and prototype chain

/// DON"T do this
// this.calcAge = function (){
//   console.log(2037-this.birthYear);
// }
// Here we would have created this method and have attached it to each object. For eg: There are 1000 of instances then we would have created 1000s of copy which may result into a big performance issue

// INSTEAD DO this
// SETIING "METHODS" ON PROTOTYPE OF INSTANCES OR PROTOTYPE PROPERTY OF
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// Here only 1 copy is created and all the instance or objects that were created throught this constructor function can access to all methods and properties defined in the above constructor prototype object

// console.log(Person.prototype);

// PROTOTYPAL INHERITANCE
// adnan.calcAge();
// Each object has access to all the methods and properties defined on its prototype
// And the prototype of the instance is the constructor prototype property
// In the above case, the prototype of the adnan is the Person.prototype

// IMPORTANT
// the "Person.prototype" is NOT the prototype of 'Person' rather it is the prototype of all the objects that were create throught this "Person" function constructor

// BUILT-IN methods to prove the above fact
// console.log(adnan.__proto__ === Person.prototype);
// Every object gets accessed to the "__proto__" property
// It is the step 3: Object is linked to prototype
// that creates the "__proto__" property and sets it to the prototype property of the function being called

// Person.prototype is the prototype of the instances
// console.log(Person.prototype.isPrototypeOf(adnan));

// So every object has "__proto__ property"
// Difference between "Prototype Property" & "prototype of objects created through constructor function(instance)"
// The Prototype property is not the prototype of the constructor function rather it is the prototype of the instances

// SETIING "PROPERTIES" ON PROTOTYPE OF INSTANCES OR PROTOTYPE PROPERTY OF
// Person.prototype.species = 'Code';
// console.log(adnan);

// Here now the "adnan" has access to the property defined in its prototype or prototype property of constructor function

// But the "adnan.species" isn't its (adnan) own property rather the 'adnan' inherited it from the prototype

// console.log(adnan.hasOwnProperty('firstName'));
// console.log(adnan.hasOwnProperty('species'));

// function logPrototypeChain(obj) {
//   let proto = Object.getPrototypeOf(obj);

//   console.group(`The prototype chain of`, obj);
//   let count = 1;
//   while (proto !== null) {
//     console.log(
//       `${count}. ${proto.constructor.name} (from ${proto.constructor.name}.prototype)`
//     );
//     proto = Object.getPrototypeOf(proto);
//     count++;
//   }
//   console.groupEnd();
// }

// function Person1(name) {
//   this.name = name;
// }

// const john = new Person1('John');

// logPrototypeChain(john);

/* 
// Instantiated object (IO): new ConstructorFunction()
console.log(adnan);
// Prototype of IO: ConstructorFunction.prototype
console.dir(adnan.__proto__);
// Prototype of Prototype of IO: Object.prototype
console.dir(adnan.__proto__.__proto__);
// Prototype of Prototype of Prototype of IO: null
console.dir(adnan.__proto__.__proto__.__proto__);
// Prototypal Chain
// new ConstructorFunction < ConstructorFunction.prototype < Object.prototype < null

// PROTOTYPAL CHAIN & INHERITANCE OF BUILT-IN OBJECTS
const arr = [1, 23, 4, 45, 8, 8, 4, 6, 4, 7];
// Instantiated object from Array constructor
console.dir(arr);
// Array.prototype
console.dir(arr.__proto__);
// Object.prototype
console.dir(arr.__proto__.__proto__);
// null
console.dir(arr.__proto__.__proto__.__proto__);

// If we create properties and methods on Array.prototype, then that property or method will accessible to all the arrays
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// But it shouldn't be done because
// 1. there is chances that a new update may come in javascript and it will have a property in the Array.prototype which may be created with the same name as we created then it will break the code. Eg: If in a js update a new property called 'unique' is set in the Array.prototype which may have different functionality then 'unique' property that we created then that would be horrible
// 2. Working with a team of developers if some of them set the same functionality in the Array.prototype and the dev may not be aware of that then he will create function for that functionality which may result in the code being inefficient

const h1 = document.querySelector('h1');
// Instantiated Object
console.dir(h1);
// HTMLHeadingElement
console.dir(h1.__proto__);
// HTMLElement
console.dir(h1.__proto__.__proto__);
// Element
console.dir(h1.__proto__.__proto__.__proto__);
// Node
console.dir(h1.__proto__.__proto__.__proto__.__proto__);
// EventTarget
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
// Object
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
// null
console.dir(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
);

const func = function () {
  console.log('ac');
};
console.dir(func);
console.dir(func.__proto__);
console.dir(func.__proto__.__proto__);
console.dir(func.__proto__.__proto__.__proto__);
// new ConstructorFunction < ConstructorFunction.prototype < Object.prototype < null
 */

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
  console.log(`${this.make} going at ${Number.parseInt(this.speed) + 10}`);
};
Car.prototype.brake = function () {
  const brake = Number.parseInt(this.speed) - 5;
  console.log(`${this.make} going at ${Number.parseInt(this.speed) - 5}`);
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

// CLASSES
// 2 TYPES OF CLASSES
// const ClassExpression = class {}
// class ClassDeclaration {}

// class PersonCl {
//   // constructor is the method of class
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // methods on prototype (after the constructor method)
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Assalamu alaikum ${this.firstName}`);
//   }
// }

// const adnanP = new PersonCl('Adnan', 2003);
// console.log(adnanP);
// adnanP.calcAge();
// adnanP.greet();

// DIFFERENCE BETWEEN CLASSES AND CONSTRUCTOR FUNCTION
// In constructor function we've to seperately set mehtods or properties on the constructor function's prototype property
// In Classes, we dont have to seperately set mehtods or properties. Inorder to just set method or property on the prototype of the instance just write the method or properties after the constructor method of Classes

// 1. Classes are Not hoisted
// 2. Classes are first-class citizens means that classes can be passed in the function as argument and return classes from function
// 3. Classes are executed in strict mode

///////////////////////////////////////////////////////////////////////////
// SETTERS AND GETTERS

/* 
const personAdnan = {
  firstName: 'Adnan',
  birthYear: 2003,
  currentYear: new Date().getFullYear(),
  movements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],

  // It is Like a method to get value but it is used as if it is an property
  get latestMov() {
    return this.movements.pop();
  },
  // It is Like a method to set value as we do in properties but it is used as if it is an property
  set latestMov(mov) {
    this.movements.push(mov);
  },
};

// personAdnan.calcAge();
console.log(personAdnan.latestMov);
personAdnan.latestMov = 500;
console.log(personAdnan.movements);

class PersonCl {
  // constructor is the method of class
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods on prototype (after the constructor method)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Assalamu alaikum ${this.firstName}`);
  }

  // set a property that already exists
  set firstName(name) {
    console.log(name);
    if (name.includes(' ')) this._firstName = name;
    else console.log(`Please enter Full name`);
  }

  get firstName() {
    return this._firstName;
  }
}

const adnanP = new PersonCl('Adnan', 2003);
const adnanP2 = new PersonCl('Adnan Khan', 2003);
adnanP.firstName = 'Adnan Khan';
console.log(adnanP, adnanP2);

 */

///////////////////////////////////////////////////////////////////////////// STATIC METHODS
// Methods that are only avialable for the class and not to the instance or prototype of instance
/* 
const MyClass = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

const adnanProP = new MyClass('Adnan', 2003);

// STATIC methods in 'constructor function'
MyClass.hi = function () {
  console.log('HI');
};
MyClass.hi();

class MyOgClass {
  constructor(name, birthYear) {
    this.name = 'Adnan';
    this.birthYear = 'Khan';
  }

  static greetHello() {
    console.log('HELLO');
  }
}

MyOgClass.greetHello();
console.dir(MyOgClass);
 */

////////////////////////////////////////////////////////////////////////
// OBJECT.CREATE()
// Another way to implement prototypal inheritance
// So there are 3 ways to implement prototypal inheritance
// 1. Constructor function
// 2. ES6 Classes
// 3. Object.create()

// Object.create(): It is also used to implement prototypal inheritance just like in "constructor function" or "ES6 Classes" BUT the difference is that it doen't need constructor function or new operator

// const personProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// "Object.create()" creates an empty object
// The argument passed in "Object.create(proto)" is the prototype of the object created by "Object.create"
// const adnan = Object.create(personProto);
// adnan.name = 'Adnan';
// adnan.birthYear = 2003;
// adnan.init('Adnan', 2003);
// adnan.calcAge();

// How Object.create() works
// 1. Object.create() creates an 'empty object'
// 2. The prototype of the newly created object created by Object.create() is set to the object passed in Object.create() as first argument

//////////////////////////////////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES (WHO INTANTIATES OBJECTS):
// CONSTRUCTOR FUNCTION

/*
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (name, birthYear, course) {
  // By writing the below 3 lines we're voilating DRY Principle because this property already exist in the 'Person' Class
  // this.name = name;
  // this.birthYear = birthYear;
  // this.course = course;
  //
  // The SOLUTION to NOT VIOLATE DRY Principle
  // Here, the Student and Person have 2 properties in common so what we do is take those 2 properties from person and not write it again in student. And the 3 property 'course' doesn't exist in person class so we define that in this class (student) itself

  // Here its not working because we're calling 'constructor function' as a regular function and in regular function the this keyword is set to 'undefined'
  // Person(name, birthYear);

  // SOLUTION: Use 'call()' method to manually set this keyword
  // Here we passed this which is equal to the object that is calling the method so student in this case
  Person.call(this, name, birthYear);
  this.course = course;

  // So we now have the extended version of Person which is Student
};

// The below code sets "Person.prototype" as the 'protoype property' of Student Class (which is not what we want)
// Student.prototype = Person.prototype;

// SOLUTION: We make 'Person.prototype' the prototype of 'Student.prototype'
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const adnan = new Student('Adnan', 2003, 'BCom');
console.log(adnan);

adnan.introduce();
adnan.calcAge();

// true because we linked the prototypes together
console.log(adnan instanceof Student);
console.log(adnan instanceof Person);
console.log(adnan instanceof Object);

// When we did Student.prototype = Object.create(Person.prototype) it also the set the 'Person' as the constructor of the Student.prototype so to fix this issue we used the below code
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// Generally when object (only 1 instance in this case) inherits from their prototypes then basically the prototypal chain is like this
// instance < Constructor.prototype < Object.prototype

// But here we made the 2 class ('Person' & 'Student') as parent and child class and in this the child class will be able to inherit from the parent class so that's why its prototypal chain look like this
// childClass < Constructor.prototype < ParentClass.prototype < Object.prototype
console.log(adnan.__proto__);
console.log(adnan.__proto__.__proto__);
console.log(adnan.__proto__.__proto__.__proto__);
console.log(adnan.__proto__.__proto__.__proto__.__proto__);
*/

///////////////////////////////////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: ES6 CLASSES
// 'Classes' hides a lot of details that are actually happening behind the scenes.
// 'Classes' are just really layer of abstraction over construction function

/*
class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  calcAge() {
    this.age = 2037 - this.birthYear;
    console.log(this.age);
  }
}

// 1] WHAT IS SUPER FUNCTION?
// 'super()' function is responsible for creating 'this' keyword in the sub-class
// If the child-class has same property or methods as parent-class then we don't need to use super() function rather the 'super()' function will be AUTOMATICALLY called

// 2] WHAT IS EXTENDS' KEYWORD?
// 'extends' keyword basically sets the 'PROTOTYPAL CHAIN'
// 'extends' means that the child-class can have new properties or methods that its parent-class don't have but it can inherit all the methods and properties defined in its prototype or the prototype property of its parent-class
// class Student extends Person {}
// const adnan = new Student('Adnan', 2003);

class Student extends Person {
  constructor(name, birthYear, course) {
    super(name, birthYear);
    this.course = course;
  }

  // We're overwriting the 'calcAge' method
  // We can overwrite method in the sub-class and then if we try to access 'calcAge()' method from adnan instance then the below calcAge() which is defined in the 'Student.prototype' will be called because the JS will first look for 'calcAge()' in the 'adnan' object itself then if it can't find 'adnan' there then it will look up in the prototypal chain into the next prototype which in this case is Student.prototype and the 'calcAge()' is actually defined here then it will take this method and run it into 'adnan' object
  // This process of overwriting the method that the sub-class inherited from parent-class is called as 'Polymorphism' (comes from a greek word which means 'many shapes')
  //
  calcAge() {
    this.age = new Date().getFullYear() - this.birthYear;
    console.log(this.age);
  }
}

const adnan = new Student('Adnan', 2003, 'BCom');
console.log(adnan);
adnan.calcAge();

*/
///////////////////////////////////////////////////////////////////////////
// INHERITANCE BETWEEN CLASSES: OBJECT.CREATE()
// In 'Object.create()' there are no constructor there are just object linked to each other

/* 
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const proman = Object.create(PersonProto);
// proman.init('Adnan', 2003);
// proman.calcAge();

const Student = Object.create(PersonProto);
Student.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
Student.introduce = function () {
  console.log(
    `My name is ${this.firstName} i am ${
      new Date().getFullYear() - this.birthYear
    } year old and I study ${this.course}`
  );
};
Student.init('Adnan', 2003, 'BCom');
Student.introduce();

const adnan = Object.create(Student);
// Student.init('Adnan', 2003, 'BCom');
// adnan.introduce();
// adnan.calcAge();
*/

///////////////////////////////////////////////////////////////////////////
// ANOTHER CLASS EXAMPLES

/*
class Account {
  constructor(firstName, pin, currency) {
    this.firstName = firstName;
    this.pin = pin;
    this.currency = currency;

    // We can create properties in instances that aren't based on any inputs
    this.movements = [];
    this.locale = navigator.language;
    this.option = {
      style: 'currency',
      currency: this.currency,
    };
    this.locale = navigator.language;
  }

  formatCurrNum(val, locale, option) {
    return new Intl.NumberFormat(locale, option).format(val);
  }

  // These methods (deposit and withdraw) are interface to our objects (instances)
  deposit(val) {
    // PUSH value
    this.movType = val > 0 ? 'deposited' : 'withdrawn';
    this.movements.push(val);
    this.curFormat = new Intl.NumberFormat(this.locale, this.option).format(
      Math.abs(val)
    );
    this.curBalance += val;

    // FORMAT number and currency

    // DISPLAY message
    console.log(`You sucessfully ${this.movType} ${this.curFormat}`);
  }
  // This withdraw method abstracted the fact that the withdrawal is basically a negative movement
  withdraw(val) {
    this.deposit(-val);
    this.curBalance -= val;
  }
  approveLoan(val) {
    this.curBalance = this.movements.reduce((acc, mov) => acc + mov, 0);
    if (val >= this.curBalance) {
      console.log(
        `Loan of ${this.formatCurrNum(val, this.locale, this.option)} approved`
      );
      return true;
    } else {
      console.log(
        `Loan of ${this.formatCurrNum(
          val,
          this.locale,
          this.option
        )} is not approved`
      );
      return false;
    }
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.movements.push(val);
      this.curBalance += val;
    }
  }
}

const acc1 = new Account('Adnan', 1111, 'INR', [1, 2]);

// Instead of interacting with properties(movements) like these, it is better to create methods which will interact with these properties
// The code which we write below isn't RECOMMENDED
// acc1.movements.push(200);
// acc1.movements.push(-200);

acc1.deposit(2352);
acc1.withdraw(2123);
acc1.requestLoan(2000);
console.log(acc1);
console.log(acc1.curBalance);
// We should not be able to access the below methods 
console.log(acc1.approveLoan(2000));
console.log(acc1.approveLoan(2228));
*/

///////////////////////////////////////////////////////////////////////////
// DATA ENCAPSULATION: PROTECTED PROPERTIES AND METHODS
// Encapsulation basically means to keep some properties and methods private in the class, so they aren't accessible outside of the class
// Then the rest of the methods are exposed as a public interface which we can also call API

// REASONS THAT WE NEED DATA ENCAPSULATION AND DATA PRIVACY
// 1. To prevent code that is outside of the class from accidentally manipulating the data inside the class.(This is also a reason why we implement public API)
// We're not supposed to manually manipulate this properties and therefore it should be encapsulated
// Eg: acc1.movements.push(150);
// 2. When we expose a small interface, so a small API consisting of few public methods then we can change all the other internal methods with MORE CONFIDENCE (Because in this case we can be sure that the external code doesn't rely on these private methods and therefore our code will not break when we do internal changes)
// And so thats what DATA ENCAPSULATION & DATA PRIVACY is and reasons for it

// FACT:
// - The Javascript actually does not support real DATA ENCAPSULATION & DATA PRIVACY
// - There is a proposal to add truly private class fields and methods to the language which is not completely ready yet
// - In this lecture, we will fake DATA ENCAPSULATION using a convention

// The DATA which needs to encapsulated in the below case
// 1. .movements(): Here, movements is 'mission critical data' so here we'll protect this data so no one can manipulate this data

// To add "FAKE DATA ENCAPSULATION" we can add "_" (underscore convention) in front of the data or behaviour that we wanna encapsulate

/*
class Account {
  constructor(firstName, pin, currency) {
    this.firstName = firstName;
    this.currency = currency;

    // We can create properties in instances that aren't based on any inputs
    // PROTECTED PROPERTY OR DATA
    // this.movements = []; // BEFORE
    this._movements = []; // AFTER
    this._pin = pin;
    this.locale = navigator.language;
    this.option = {
      style: 'currency',
      currency: this.currency,
    };
    this.locale = navigator.language;
  }

  formatCurrNum(val, locale, option) {
    return new Intl.NumberFormat(locale, option).format(val);
  }

  // These methods (deposit and withdraw) are interface to our objects (instances)
  deposit(val) {
    // PUSH value
    this.movType = val > 0 ? 'deposited' : 'withdrawn';
    this._movements.push(val);
    this.curFormat = new Intl.NumberFormat(this.locale, this.option).format(
      Math.abs(val)
    );
    this.curBalance += val;

    // FORMAT number and currency

    // DISPLAY message
    console.log(`You sucessfully ${this.movType} ${this.curFormat}`);
  }
  // This withdraw method abstracted the fact that the withdrawal is basically a negative movement
  withdraw(val) {
    this.deposit(-val);
    this.curBalance -= val;
  }
  // We also made 'approveLoan' private because its supposed to only accessible by bank and not for customers
  // This is how we protect fields from unwanted access
  _approveLoan(val) {
    this.curBalance = this._movements.reduce((acc, mov) => acc + mov, 0);
    if (val >= this.curBalance) {
      console.log(
        `Loan of ${this.formatCurrNum(val, this.locale, this.option)} approved`
      );
      return true;
    } else {
      console.log(
        `Loan of ${this.formatCurrNum(
          val,
          this.locale,
          this.option
        )} is not approved`
      );
      return false;
    }
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this._movements.push(val);
      this.curBalance += val;
    }
  }
  // But if we want to still give access to movements method outside of the class then we would have to implement the public method for that
  getMovements() {
    return this._movements;
  }
}

const acc1 = new Account('Adnan', 1111, 'INR', [1, 2]);

// After implementing "_" (underscore convention) before data or behaviour we made that data or behaviour encapsulated. The below code now can't access 'movements' method
// acc1.movements.push(200);
// acc1.movements.push(-200);

// BUT, there's a problem because 'movements' are still accessible when we use 'acc1._movements'
// And thats because using "_" doesn't make the data truly private it is just a convention. (Its something that developers agree to use and then everyone uses it)
// acc1._movements.push(200);
// acc1._movements.push(-200);

// And since it is not truly private we call it "PROTECTED" (so protected property)
// Using "_" allows the team to know that these properties aren't supposed to touch outside of the classes. (One can still do it but atleast know that these properties aren't supposed to be touched)

acc1.deposit(2352);
acc1.withdraw(2123);
acc1.requestLoan(2000);
console.log(acc1);
console.log(acc1.curBalance);
// We should not be able to access the below methods
// console.log(acc1.approveLoan(2000));
// console.log(acc1.approveLoan(2228));
// console.log(acc1.movements);
console.log(acc1._movements);

// Now this would be the correct way to access the movements. So now they can still access this movements but can't overwrite them UNLESS they use '_' convention but then atleast they will know that its wrong to access the property
console.log(acc1.getMovements());
2
*/
///////////////////////////////////////////////////////////////////////////
// DATA ENCAPSULATION: PRIVATE CLASSES FIELDS AND METHODS

// What is FIELDS?
// - In Traditional OOP languages like C++, Java properties are called as fields

// FACTS
// - With the new proposal the Javascript is moving away from the idea that class are just a layer of abstraction over constructor function
// Because with these new classes features, classes actually start to have abilities that we didn't previously had with constructor function

// 8 types of FIELDS AND METHODS
// 1. Private Fields
// 2. Public Fields
// 3. Private Methods
// 4. Public Methods
// 5. Static Private Fields
// 6. Static Public Fields
// 7. Static Private Methods
// 8. Static Public Methods

// GROUPING 8 Methods
// 1. Private Fields (instance)
// 2. Private Methods (instance)
// 3. Static Private Fields (Class)
// 4. Static Private Methods (Class)

// 5. Public Fields (instance)
// 6. Public Methods (prototype property of its constructor)
// 7. Static Public Fields (Class)
// 8. Static Public Methods (Class)

/*
class Account {
  // 1. Private Fields (instance)
  #movements = [];
  #pin;

  // 2. Public Fields (instance)
  locale = navigator.language;
  // _movements = [];

  constructor(firstName, pin, currency) {
    this.firstName = firstName;
    this.currency = currency;

    // this._movements = []; // AFTER
    // this._pin = pin;
    this.option = {
      style: 'currency',
      currency: this.currency,
    };
    this.locale = navigator.language;
  }

  // 3. Public Methods
  formatCurrNum(val, locale, option) {
    return new Intl.NumberFormat(locale, option).format(val);
  }

  deposit(val) {
    this.movType = val > 0 ? 'deposited' : 'withdrawn';
    this.#movements.push(val);
    this.curFormat = new Intl.NumberFormat(this.locale, this.option).format(
      Math.abs(val)
    );
    this.curBalance += val;

    console.log(`You sucessfully ${this.movType} ${this.curFormat}`);
  }
  withdraw(val) {
    this.deposit(-val);
    this.curBalance -= val;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.#movements.push(val);
      this.curBalance += val;
    }
  }
  getMovements() {
    // return this.#movements;

    // The BELOW code doesn't allow the movements array to be manipulated
    // return Object.freeze(this.#movements);
    return this.#movements.slice(0);
  }

  // 4. Private Methods
  // Private method creates an abstraction. It hides the implementation details
  #approveLoan(val) {
    this.curBalance = this.#movements.reduce((acc, mov) => acc + mov, 0);
    if (val >= this.curBalance) {
      console.log(
        `Loan of ${this.formatCurrNum(val, this.locale, this.option)} approved`
      );
      return true;
    } else {
      console.log(
        `Loan of ${this.formatCurrNum(
          val,
          this.locale,
          this.option
        )} is not approved`
      );
      return false;
    }
  }

  // 5. Static Public Fields
  static myName = this;

  // 6. Static Public Methods
  static helper() {
    console.log('Helper');
  }

  // 7. Static Private Fields
  static #statField = 'Secret';

  // 8. Static Private Methods
  static #statMth = function () {
    console.log('Wow');
  };
}

const acc1 = new Account('Adnan', 1111, 'INR', [1, 2]);

acc1.deposit(2352);
acc1.withdraw(2123);
acc1.requestLoan(2000);
console.log(acc1);
console.log(acc1.curBalance);
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(2000));
Account.helper();
console.log(Account.myName);
// console.log(Account.#statField);
// console.log(Account.#statMth);
console.log(acc1);
acc1.requestLoan(20000);
acc1.requestLoan(1);
console.dir(Account);

// will not work because 'getMovements()' returns a copy of movements and not that movement array itself
console.log(acc1.getMovements().push(234));
// acc1.deposit(23);
console.log(acc1.getMovements());
*/

//////////////////////////////////////////////////////////////////////////
// CHAINING METHODS

/*
class Account {
  // 1. Private Fields (instance)
  #movements = [];
  #pin;
  
  // 2. Public Fields (instance)
  locale = navigator.language;
  // _movements = [];

  constructor(firstName, pin, currency) {
    this.firstName = firstName;
    this.currency = currency;
    
    // this._movements = []; // AFTER
    // this._pin = pin;
    this.option = {
      style: 'currency',
      currency: this.currency,
    };
    this.locale = navigator.language;
  }
  
  // 3. Public Methods
  // To make methods (defined on prototype property of the class) 'CHAINABLE' we need to RETURN OBJECT from every methods of the class
  formatCurrNum(val, locale, option) {
    return new Intl.NumberFormat(locale, option).format(val);
  }
  
  deposit(val) {
    this.movType = val > 0 ? 'deposited' : 'withdrawn';
    this.#movements.push(val);
    this.curFormat = new Intl.NumberFormat(this.locale, this.option).format(
      Math.abs(val)
      );
      this.curBalance += val;
      
      console.log(`You sucessfully ${this.movType} ${this.curFormat}`);
      return this;
    }
    withdraw(val) {
      this.deposit(-val);
    this.curBalance -= val;
    return this;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.#movements.push(val);
      this.curBalance += val;
      return this;
    }
  }
  getMovements() {
    // return this.#movements;
    
    // The BELOW code doesn't allow the movements array to be manipulated
    // return Object.freeze(this.#movements);
    return this.#movements.slice(0);
  }

  // 4. Private Methods
  // Private method creates an abstraction. It hides the implementation details
  #approveLoan(val) {
    this.curBalance = this.#movements.reduce((acc, mov) => acc + mov, 0);
    if (val >= this.curBalance) {
      console.log(
        `Loan of ${this.formatCurrNum(val, this.locale, this.option)} approved`
        );
      return true;
    } else {
      console.log(
        `Loan of ${this.formatCurrNum(
          val,
          this.locale,
          this.option
        )} is not approved`
        );
        return false;
    }
  }
  
  // 5. Static Public Fields
  static myName = this;

  // 6. Static Public Methods
  static helper() {
    console.log('Helper');
  }

  // 7. Static Private Fields
  static #statField = 'Secret';
  
  // 8. Static Private Methods
  static #statMth = function () {
    console.log('Wow');
  };
}

const acc1 = new Account('Adnan', 1111, 'INR', [1, 2]);

// CHAINING METHODS
// We can chain the methods of the class (defined in prototype of instances) just like we can do it in array methods
// acc1.deposit(200).withdraw(14).deposit(342).withdraw(11).requestLoan(2000); // ERROR
// because firstly 'acc1.deposit()' returns nothing which is undefined so we're calling other methods on undefined therefore we're getting ERROR
// To solve this problem we need to RETURN OBJECT from every methods of the class (Look ABOVE in all the methods defined in the prototype property of the class)

// We generally make that objects chainable in which we've to set certain properties
acc1.deposit(200).withdraw(14).deposit(342).withdraw(11).requestLoan(2000); // This will work as we returned objects from every method
console.log(acc1.getMovements());
*/

//////////////////////////////////////////////////////////////////////////
// ES6 CLASS SUMMARY
