//Crie um programa que seja capaz de percorrer uma lista números e imprima cada número Par encontrado.

const numbers = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}