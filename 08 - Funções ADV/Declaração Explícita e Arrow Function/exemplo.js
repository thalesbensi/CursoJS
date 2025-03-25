function funcao1(){
    console.log(this)
}

//Não tem contexto e não isola a função
const funcao2 = () => {
    console.log(this)
}

const thales = {
    nome: 'Thales',
    funcao1,
    funcao2
}

thales.funcao1
thales.funcao2