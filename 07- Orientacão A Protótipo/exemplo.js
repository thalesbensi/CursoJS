//Orientação a Protótipo
const pessoa = {
    genero: 'masculino'
}

const renan = {
    nome: 'renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.genero)

//Função Construtora
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const thales = new Pessoa('Thales', 22)
console.log(thales)

//Equivalente
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    falar() {
        console.log(`Meu nome é: ${this.nome}`);
    }
}
