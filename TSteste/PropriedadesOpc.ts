function somaa(a: number, b: number, c?:number): number{
    if(c === undefined){
        return a + b
    }
    else{
        return a + b + c 
    }
}

console.log(somaa(2, 2))

// Foi colocado propriedades opcionais nessa função
// Sintaxe: c?: number

// O typescript não compila possiveis dois valores
// Por isso tem que fazer a validação dos valores