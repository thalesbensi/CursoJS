const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})

console.log('Esperando...')

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })


    //Açúcar sintático

    const fs = require('fs')
    const path = require('path')

    const filePath = path.resolve(__dirname, 'tarefas.csv')

    async function buscarArquivo() {
        try {
            const arquivo = await fs.promises.readFile(filePath)
            const textoDoArquivo = arquivo.toString('utf8')
            console.log(textoDoArquivo)
        } catch (error) {
            console.log(error)
        } finally {
            console.log('finalizou!')
        }
    }

buscarArquivo()