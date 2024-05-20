class User {
    nome!: string
    idade!: number
}

const usuario = new User()

console.log(usuario)

// Assim se cria uma classe em TS
// As exclamações servem para informar que os valores não serão iniciados no começo

class NovoUsuario {
    nome
    idade

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
}

const usuario1 = new NovoUsuario("Diego", 21)
console.log(usuario1)

// O constructor foi adicionado
// Assim se cria uma classe completa

class Carro {
    nome: string
    readonly rodas = 4


    constructor(nome: string){
        this.nome = nome
    }
}

const carro1 = new Carro("Fusca")
console.log(carro1)

// Desse modo com o readonly já está definido nossas rodas
// Elas não são alteradas e já vem implicitamente quando verificamos a class


class humano {
    nome
    idade

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade
    }
}

const diegoo = new humano("Diego", 22)

class poder extends humano {
    poderes
    
    constructor(nome: string, idade: number, poderes: string[]){
        super(nome, idade)
        this.poderes = poderes
    }
}

const luffyy = new poder('Luffy', 21, ['Borracha', 'Gear 5', 'Cabelo branco'])
console.log(luffyy)

// Classes tendo herança 
// Uma classe com herança é quando ela herda algo de outra classe
// Nesse caso a classe poder herda de humano
// sua sintaxe: class poder extends humano
// A palavra reservada extends serve para fazer essa função
// o super serve para puxar os atributos da classe que foi herdade

class anao {
    nome

    constructor(nome: string){
        this.nome = nome
    }

    falar(){
       console.log(`${this.nome} disse oi`)
    }

    idade(idade: number){
        if(idade > 18){
            console.log(`${this.nome} é maior de idade`)
        }
        else{
            console.log(`${this.nome} é menor de idade`)
        }
    }
}

const anao01 = new anao('Derick')
anao01.falar()
anao01.idade(20)

// Assim se coloca métodos em uma classe TS
// Eles são usados para modificar e alterar mais os objetos da minha classe

class generica <T, U> {
    primeiro
    segundo

    constructor(primeiro: T, segundo: U){
        this.primeiro = primeiro
        this.segundo = segundo
    }
}

const genericos = new generica("Diego", "aaaa")

// Dessa forma se faz uma classe do tipo generico que recebe qualquer valor
// Ela pode receber qualquer valor primitivo