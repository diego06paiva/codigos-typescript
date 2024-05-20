function resultadoSoma(resultado) {
    console.log(`O resultado da soma é ${resultado}`)
}

function resultadoMultiplicacao(resultado) {
    console.log(`O resultado da multiplicação é ${resultado}`)
}

function resultadoSubtracao(resultado) {
    console.log(`O resultado da subtração é ${resultado}`)
}

function soma(a, b, cb) {
    const soma = a + b
    cb(soma)
}

function multiplicacao(a, b, cb) {
    const multiplicacao = a * b
    cb(multiplicacao)
}

function subtracao(a, b, cb) {
    const subtracao = a - b
    cb(subtracao)
}

soma(10, 10, resultadoSoma)
multiplicacao(5, 5, resultadoMultiplicacao)
subtracao(100, 50, resultadoSubtracao)


