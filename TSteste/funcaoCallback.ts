function chamaSoma(resultado: number){
    console.log(`O resultado da soma é ${resultado}`)
}

function soma1(a: number, b: number, cb: (resultado: number)=> void){
    let soma = a + b
    cb(soma)
}

soma1(10, 100, chamaSoma)

// Asim que se faz uma função de callback em TS
// É importante notar as tipagens de tudo
// Desde o cb com a tipagem do resultado e a arrowFunction
// Até o retorno que sai em void, pois não é para ter um return
// Afinal callbacks são sem retorno