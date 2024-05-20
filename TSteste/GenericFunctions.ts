function show<T>(cantor: T): string{
    return `O artista é ${cantor}`
}

console.log(show("Madonna"))
console.log(show(5))
console.log(show(true))

// Assim funciona uma generic function
// Determinei que ela receberia qualquer valor
// Sintaxe: function show<T> (cantor: T)
// É comum o uso do <T> e do <U> para usar as funções genericas


function primeiroopcao<T>(array: T[]): T{
    return array[0]
 }
 
 console.log(primeiroopcao([1, 2, 3, 4]))
 console.log(primeiroopcao(["Diego", "Moura"]))
 console.log(primeiroopcao([true, false]))
 
 // Funcões genericas são assim
 // Crio uma função que só pode receber um dado tipo de método
 // Nesse caso uma função que recebe qualquer valor desde de que seja uma array
 
 // Sintaxe: function NomeFunção<T> (variavel: T[]): T {
 //   lógica da função
 //}
 
 // A sintaxe pode ser qualquer letra dentro das <> Mas é convenção usar o T
 // O mesmo segue para a argumentação e return



// ----------------------------------------------------------------------------------

 function soma2<T extends number | string>(a: T, b: T): T{
    let soma2: T

    if(a > b){
        console.log(`${a} Maoir que ${b}`)
        soma2 = a
    } else{
        console.log(`${b} maior que ${a}`)
        soma2 = b
    }

    return soma2
}

soma2(5, 4)
soma2("ac", "ab")

// Nessa função generica foi adicionada a constraint 
// Agora a função aceita string e number
// Ou seja ele aceita 2 tipos

// Sintaxe: function NomeFunção<T extends number | string> (a: T, b: T): T {
//   lógica da função
// }