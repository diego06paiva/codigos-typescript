function lados(lados: "Esquerda" | "Direita" | "Cima" | "Baixo"){
    return`O valor retornado foi ${lados}`
}

console.log(lados("Esquerda"))

// Os literais tipos são usados para restringir o que queremos
// Nesse código eu só posso passar o que está em parametro dentro da função
// Qualquer cois diferente disso vai dar erro