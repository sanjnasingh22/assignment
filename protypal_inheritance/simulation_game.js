function Vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed || 0;
  this.fuelType = fuelType || "Unknown";
}

Vehicle.prototype.accelerate = function (increaseSpeed) {
  this.speed += increaseSpeed;
  console.log(
    `${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} mph`
  );
};

Vehicle.prototype.brake = function (decreaseSpeed) {
  this.speed -= decreaseSpeed;
  console.log(
    `${this.brand} ${this.model} is braking. Current speed: ${this.speed} mph`
  );
};

Vehicle.prototype.refuel = function () {
  console.log(`${this.brand} ${this.model} is refueling.`);
};

function Car(brand, model, speed, fuelType, numberOfWheels) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfWheels = numberOfWheels || 4;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
  console.log(`Honk! ${this.brand} ${this.model} is honking.`);
};

function Airplane(
  brand,
  model,
  speed,
  fuelType,
  numberOfEngines,
  hasLandingGear
) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfEngines = numberOfEngines || 2;
  this.hasLandingGear = hasLandingGear || true;
}

Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.takeOff = function () {
  console.log(`${this.brand} ${this.model} is taking off.`);
};

const myCar = new Car("Toyota", "Camry", 60, "Gasoline", 4);
const myAirplane = new Airplane("Boeing", "747", 600, "Jet Fuel", 4, true);

myCar.accelerate(20);
myCar.brake(10);
myCar.refuel();
myCar.honk();

myAirplane.accelerate(200);
myAirplane.brake(50);
myAirplane.refuel();
myAirplane.takeOff();
