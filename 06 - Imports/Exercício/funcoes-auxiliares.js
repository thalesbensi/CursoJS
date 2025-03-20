
const input = [10, 5, 50, 10, 98, 23, 33, 44, 99, 1, 27]
let  counter = 0


function gets(){
    const value = input[counter];
    counter++;
    return value;
}

function print(text){
    console.log(text)
}

module.exports = {gets, print}