function soma(a: number | string, b: number | string){
    if(typeof a === "string" && typeof b === "string"){
        return parseFloat(a) + parseFloat(b)
    }
    else if (typeof a === "number" && typeof b === "number"){
        return Number(a) + Number(b)
    }
    else{
        return `Soma impossivel`
    }
}

console.log(soma("12", '12'))
console.log(soma(15, 15))
console.log(soma("20", 20))

// Método Norrowing que serve para fazer verificação de dados
// Ele é útil para evitar possiveis erros

// A principal ideia do norrowing é a verificação 
// Ele não é um código em especifico