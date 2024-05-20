let nome: string = "Diego"
// Do tipo string

let num: number = 22
// Do tipo number

let verdade: boolean = true
// Do tipo boolean

let todas: any = false
// Do tipo any
// Serve para todos os valores


function pessoas(idade: number | string){
    if(typeof idade === "string"){
        return `Não aprovado`
    }

    return `Aprovado`
}
console.log(pessoas(18))
console.log(pessoas("18"))
console.log("teste")

// Do tipo union type
// Onde temos a união de varios valores
// sintaxe: number | string



type ID = string | number

function somaaa(a: ID, b: ID){
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    }
    
    return "a" + "b"
}

console.log(somaaa(5, 6))

// Do tipo alias que posso determinar antes qual o tipo de valor
// sintaxe: type ID = string | number
// Agora ID tem valor de string e number




// ------------------------------------------------------------
// Nenhum desses valores pode mudar seu tipo primitivo