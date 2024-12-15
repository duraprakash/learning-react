// import React, { useState } from "react";

/**
 * Class and Object
 */
class Vehicle { // Class
    constructor(name) { // Constructor
        this.name = name;
    }

    start() { // Method
        return 'Starting vehicle ' + this.name;
    }
}

const myVehicle = new Vehicle('Toyota'); // Class instance
myVehicle.start();

/**
 * Inheritance
 * Inherits the properties and method of parent class
 */
class Car extends Vehicle { // Extending class
    constructor(name, brand) { // Constructor
        super(name); // Calls the parent class constructor (Vehicle)
        this.brand = brand;
    }

    show() { // Method
        return 'Showing car brand of ' + this.brand;
    } 
}

const myCar = new Car('Toyota', 'Japanese'); // Class instance
myCar.show();

/**
 * Polymorphism
 * Having multiple form like a person having different roles
 * i.e a female person is teacher at school and mother at home
 */
class Bike extends Vehicle { // Extending class
    constructor(name, brand) { // Constructor
        super(name); // Calls the parent class constructor (Vehicle)
        this.brand = brand;
    }

    show() { // Method
        return 'Showing bike brand of ' + this.brand;
    }
}

const myBike = new Bike('Yamaha', 'Japanese');
myBike.show();

/**
 * Encapsulation
 * Hides the internal state of an object and 
 */
class Truck { // Class
    #speed; // Private field

    constructor(speed){
        this.#speed = speed; // Only accessible within the class
    }

    getSpeed() {
        return this.#speed; // Getter for speed
    }

    setSpeed(speed) {
        this.#speed = speed; // Setter for speed
    }
}

const myTruck = new Truck(60);;
myTruck.getSpeed();
myTruck.setSpeed(40);
myTruck.getSpeed();

class Tripper extends Vehicle { // Class
    #speed; // Private field

    constructor(name, speed) {
        super(name);
        this.#speed = speed; // Only accessible within the class
    }

    getSpeed() {
        return this.#speed; // Getter for speed
    }

    setSpeed(speed) {
        this.#speed = speed; // Setter for speed
    }
}

const myTripper = new Tripper(60);;
myTripper.getSpeed();
myTripper.setSpeed(40);
myTripper.getSpeed();

/**
 * Abstraction
 * Hiding complex implementation details and showing only the essential features of the object
 */
class AbstractVehicle { // Abstract class
    constructor(name) { // Constructor
        if (this.constructor === AbstractVehicle) {
            throw new Error("Abstract class cannot be instantiated");
        }
        this.name = name;
    }

    start() { // Method
        throw new Error("Method 'start' must be implemented");
    }

}

/**
 * Cannot be instantiated
 * because it is an abstract class
 */
// const myAbstractVehicle = new AbstractVehicle(); // Cannot be instantiated
// myAbstractVehicle.start(); // Must be implemented

class AbCar extends AbstractVehicle { // Extending abstract class
    constructor(name, brand) { // Constructor
        super(name); // Calling parent class constructor
        this.brand = brand;
    }

    start() { // Method
        return 'Starting abstract vehicle ' + this.name;
    }

    show() { // Method
        return 'Showing abstract car of brand ' + this.brand;
    }
}

const myAbCar = new AbCar('Ab Toyota', 'Ab Japanese');
myAbCar.start();
myAbCar.show();

// Polymorphism
class AbBike extends AbstractVehicle { // Extending abstract class
    constructor(name, brand) { // Constructor
        super(name); // Calling parent class constructor
        this.brand = brand;
    }

    start() { // Method
        return 'Starting abstract vehicle ' + this.name;
    }

    show() { // Method
        return 'Showing abstract bike of brand ' + this.brand;
    }
}

const myAbBike = new AbBike('Ab Bullet', 'Ab Japanese');
myAbBike.start();
myAbBike.show();

// Now you can export the classes so they can be used in other files.
export { Vehicle, Car, Bike, Truck, Tripper, AbstractVehicle, AbCar, AbBike };