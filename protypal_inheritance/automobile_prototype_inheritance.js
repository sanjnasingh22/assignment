function Automobile(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Automobile.prototype.drive = function () {
  console.log(`${this.make} ${this.model} is driving.`);
};

function Car(make, model, year) {
  Automobile.call(this, make, model, year);
  this.type = "Car";
}

Car.prototype = Object.create(Automobile.prototype);
Car.prototype.constructor = Car;

Car.prototype.openTrunk = function () {
  console.log(`${this.make} ${this.model} trunk is open.`);
};

function SUV(make, model, year) {
  Automobile.call(this, make, model, year);
  this.type = "SUV";
}

SUV.prototype = new Automobile();
SUV.prototype.constructor = SUV;

SUV.prototype.offRoad = function () {
  console.log(`${this.make} ${this.model} is going off-road.`);
};

const myCar = new Car("Toyota", "Camry", 2022);
const mySUV = new SUV("Jeep", "Cherokee", 2023);

myCar.drive();
myCar.openTrunk();

mySUV.drive();
mySUV.offRoad();
