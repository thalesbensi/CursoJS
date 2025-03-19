class Car {
    brand;
    color;
    fuelAutonomyInKm;

    constructor(brand, color, fuelAutonomyInKm){
        this.brand = brand;
        this.color = color;
        this.fuelAutonomyInKm = fuelAutonomyInKm; 
    }

    fuelConsumePrice(travelLength, fuelPrice){
        const fuelConsumePrice = travelLength * this.fuelAutonomyInKm * fuelPrice;
        return fuelConsumePrice;
    }
}

const peugeot208 = new Car(`Peugeot`, `Red`, 1/12);

console.log(peugeot208);
console.log(peugeot208.fuelConsumePrice(70, 5));
