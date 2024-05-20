interface DadosProdutos {
    nome: string
    valor: number
    estoque: boolean
}


const produto: DadosProdutos = {
    nome: "Celular",
    valor: 500,
    estoque: true
}

const produto1: DadosProdutos = {
    nome: "Video Game",
    valor: 700,
    estoque: true
}


function ProdutosVenda(produto: DadosProdutos){
    if(produto.estoque){
        console.log(`Temos sim`)
    } else {
        console.log("Está em falta")
        return
    }
    console.log(`O nome do produto é ${produto.nome} Seu preço é ${produto.valor}`)
}


ProdutosVenda(produto)
ProdutosVenda(produto1)
ProdutosVenda({nome: "Sapato", valor: 45, estoque: true})

// Essa é uma maneira de se criar um objeto em TS
// O método interface é para tipar váriaveis e poder reutilizar elas depois
// Os objetos geralmente seguem essa estrutura de código


interface Usuarios {
    nome: string
    funcao?: string
}

function trabalho(cargo: Usuarios){
    console.log(`O cara é ${cargo.nome}`)
    if(cargo.funcao){
        console.log(`E ele é ${cargo.funcao}`)
    }
}


const u1: Usuarios = {nome: "Diego"}
const u2: Usuarios = {nome: "Derick", funcao: "ADM"}

trabalho(u1)
trabalho(u2)

// interface com parâmetros opcionais
// sintaxe: funcao?: string


interface pecasCarros {
    marca: string
    readonly rodas: number
}

const fusca: pecasCarros = {
    marca: "vw",
    rodas: 4
}

console.log(fusca)

// a função readonly serve para marcar uma propriedade que não irá mudar
// Neste caso as rodas, já que todo carro sempre por padrão terá 4 rodas
// Sitaxe: readonly rodas: number


let frutas:ReadonlyArray <string> = ["Banana", "maçã", "Uva"]

// ReadonlyArray é um método que evita mudanças na array
// sintaxe: ReadonlyArray <string> = []
// A array não podera mudar, ele serve apenas como leitura

console.log(frutas)

interface humano {
    nome: string
    idade: number
}

interface superHumano extends humano {
    superPoder: string[]
}

const diego: humano = {
    nome: "Diego",
    idade: 30
}

const luffy: superHumano = {
    nome: "Luffy",
    idade: 21,
    superPoder: ["Estica", "Haki do rei", "Haki do armamento", "Haki da observação"]
}

console.log(luffy.superPoder[3])
console.log(luffy)
console.log(diego)

// interface com herança
// interface com extends que serve para extender um objeto já criado
// Assim evita a repetição de código
// sintaxe: interface extends humano 

type cinco = [number, number, number, number, number]

const lista: cinco = [1, 2, 3, 4, 5]

// Uma tupla em TS funciona assim
// Já determinamos como ela é para seguir um padrão de código
// Neste caso toda lista que levar a proriedade 'cinco' sempre tera que por 5 elementos number
// Sem opção de alteração



interface objetos<T> {
    nome: string
    valor: T
    cor: T
}

type carro = objetos<number | string>

const meucarro: carro = {
    nome: "VW",
    valor: 120,
    cor: "Azul"
}

// funções genericas com interface
// Atráves de uma interface selecionamos o tipo
// E colocamos que vai ser um valor generico, ou seja pode ser qualquer tipo
