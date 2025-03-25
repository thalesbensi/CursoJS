function falarMeuNome() {
    console.log('Meu nome é Renan');
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome();
    console.log('Johannsen de Paula');
    return falarMeuNome;
}

falarMeuNomeCompleto(falarMeuNome)();
