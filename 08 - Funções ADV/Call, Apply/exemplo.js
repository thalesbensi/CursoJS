const pessoa = {
    nome: 'Renan',
    idade: 30
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['0laaaaa'])
gritar.call(pessoa, '0laaaaa')