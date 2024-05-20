class pessoa {
    nome 
    idade 

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }


    get falar(): string{
        return `${this.nome} falou oi`
    }
}

const pessoa01 = new pessoa('Diego', 22)
console.log(pessoa01)

// Método getter ele serve para pegar o valor de uma propriedade
// Quando se usa um getter é obrigatorio ter um return
// É uma boa prática usar ele para lógicas mais complexas

class numeros {
    x!: number
    y!: number

    set numerosx(x: number){
            if(x === 0){
                return       
            }
            this.x = x
            console.log(`${x} inserido com sucesso`)
    }

    set numerosy(y: number){
        if(y === 0){
            return
        }
        this.y = y
        console.log(`${y} inserido com sucesso`)
    }
}

const numbers = new numeros()

numbers.numerosx = 1
numbers.numerosy = 15

// Usando os setters para atribuir valor a alguma coisa



class pessoaa {
    nome
    time
    idade

    constructor(nome: string, time: string, idade: number){
        this.nome = nome
        this.time = time
        this.idade = idade 
    }

    set maioridade(maiorIdade: number){
        if(maiorIdade >= 18){
            console.log("Pode entrar")
        }
        else {
            console.log("Não pode entrar")
        }

    
    }
    get falar(){
        
        return `${this.nome} disse oi`
    }

}

const p1 = new pessoaa('Diego', 'Vasco', 18)
p1.maioridade = 18
p1.falar
console.log(p1)

// Aqui é junção dos getters e setters
// O getter pega o valor de uma propriedade
// O setter referencia o valor de uma propriedade com base na lógica
// Nesse caso o setter verifica a idade de uma pessoa