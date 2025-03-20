const {gets, print} = require('./funcoes-auxiliares');


let higher = 0;
const studentsQuantity = gets()

for (let i = 0; i < studentsQuantity; i++) {
    let numberToBeVerified = gets()
    if(numberToBeVerified > higher){
        higher = numberToBeVerified
    }
}

console.log(higher);


