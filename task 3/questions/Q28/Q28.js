function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
}

const myCar = new Car('baleno', 20, 180);
console.log('Car name:', myCar.name);
console.log('Mileage:', myCar.mileage);
console.log('Max speed:', myCar.max_speed);
