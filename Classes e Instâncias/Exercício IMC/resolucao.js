class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularSeuIMC() {
        const imc = this.peso / (Math.pow(this.altura, 2));
        return imc;
    }

    classificarIMC(){
        const imc = this.calcularSeuIMC();

        if (imc < 18.5) {
            return('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return('Obeso');
        } else {
            return('Obsedidade Grave');
        }
    }
}

const jose = new Pessoa(`José`, 70, 1.75);

console.log(jose);
console.log(jose.calcularSeuIMC());
console.log(jose.classificarIMC());

const thales = new Pessoa(`Thales`, 66, 1.61);
console.log(thales);
console.log(thales.calcularSeuIMC());
console.log(thales.classificarIMC());