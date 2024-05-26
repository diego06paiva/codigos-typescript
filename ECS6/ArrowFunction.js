const soma = function soma(a, b) {
    return (a + b)
}
console.log(soma(10, 20))


// Sintaxe da arrowFunction
// Pode ser escrita em uma unica linha 
// Quando ela é pequena
const arrowfun = (a, b) => a + b
console.log(arrowfun(10, 50))


// Sinataxe de arrowFunction com corpo 
const nome = (nome) => {
    if (nome){
        return `Ola ${nome}`
    } else {
        return `Ola`
    }
}

console.log(nome('Diego'))
console.log(nome())


// ArrowFunction sem paramêtor que não faz lógica
const nada = () => {
    return `Nada`
}