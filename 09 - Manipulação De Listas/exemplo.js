class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const lista = [1,2,3,4,5,6,7,8,9,10]

// .forEach() -> Forma de percorrer a lista assim como um For(), porém mais lento
lista.forEach((value,i,listRef) => {
    console.log(value + i)
})

console.log('')
console.log('')

// .filter() ->Retorna se oo elemento que estamos recoreendo se mantém ou não no rsultado final
const listaDeNumerosPares = lista.filter((element) => element % 2 === 0)
console.log(lista)
console.log('')
console.log(listaDeNumerosPares)

console.log('')
console.log('')

// .map() -> Transforma elementos de uma lista
const listaPessoas = [new Pessoa('Thales'), new Pessoa('Maria'), new Pessoa('Luiza'), new Pessoa('Magali')]

const listaDeNomesDePessoas = listaPessoas.map((element) => element.nome)
console.log(listaDeNomesDePessoas)

// .Reduce() -> Percorrendo a lista e tranformando a lista em um único valor
const reducedList = lista.reduce((previous, current) => current + previous, 0)
console.log(reducedList)

console.log('')
console.log('')

// .join() Muda o separador
console.log(
    listaDeNomesDePessoas.map(e => e.nome)
    .filter((e) => e.startsWith('M'))
    .join('; ')
)
