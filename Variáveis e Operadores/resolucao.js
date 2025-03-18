
let fuelValue = 5.79 ;
let autonomyKilometer = 10;
let travelLength = 100;

let fuelConsumePrice = (travelLength / autonomyKilometer) * fuelValue;

console.log(fuelConsumePrice.toFixed(2));