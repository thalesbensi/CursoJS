

let ethanolValue = 5.79;
let fuelValue = 6.66;
let carFuelType = 'gasoline';
let autonomyKilometer = 10;
let travelLength = 100;

    if (carFuelType === 'gasoline'){
         let fuelConsumePrice = (travelLength / autonomyKilometer) * fuelValue;
            console.log(fuelConsumePrice.toFixed(2));
    } else {
         let fuelConsumePrice = (travelLength / autonomyKilometer) * ethanolValue;
            console.log(fuelConsumePrice.toFixed(2));
    }
