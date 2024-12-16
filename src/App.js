import './App.css';
import React, { useState } from 'react';
import { Vehicle, Car, Bike, Truck, Tripper, AbCar, AbBike } from './test'; // Importing from test.js


const App = () => {
  const [vehicleInfo, setVehicleInfo] = useState('');

  // Creating instances of the classes
  const myVehicle = new Vehicle('Toyota');
  const myCar = new Car('Toyota', 'Japanese');
  const myBike = new Bike('Yamaha', 'Japanese');
  const myTruck = new Truck(60);
  const myTripper = new Tripper('Japanese', 60);;
  const myAbCar = new AbCar('Ab Toyota', 'Ab Japanese');
  const myAbBike = new AbBike('Ab Bullet', 'Ab Japanese');

  const handleVehicleAction = () => {
    setVehicleInfo(`
      ${myVehicle.start()}
      ${myCar.show()}
      ${myBike.show()}
      Speed of Truck: ${myTruck.getSpeed()}
      Speed of Truck after setting: ${myTruck.setSpeed(40) || myTruck.getSpeed()}
      Speed of Tripper: ${myTripper.getSpeed()}
      Speed of Tripper after setting: ${myTripper.setSpeed(40) || myTripper.getSpeed()}
      ${myAbCar.start()}
      ${myAbCar.show()}
      ${myAbBike.start()}
      ${myAbBike.show()}
    `);
  };

  return (
    <div>
      <h1>Vehicle Information</h1>
      <button onClick={handleVehicleAction}>Get Vehicle Info</button>
      <pre>{vehicleInfo}</pre>
    </div>
  );
};

export default App;
