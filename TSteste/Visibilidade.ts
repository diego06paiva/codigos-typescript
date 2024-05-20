
class nome {
    public nomes = 'Diego'
}

const chamaNome = new nome()
console.log(chamaNome.nomes)

// Essa é uma visibilidade pública
// Ela já vem de modo implicita
// Eu posso fazer a chamada da função de qualquer lugar

class idade {
    protected idades = 20

    mostraIdade(){
        console.log( `idade é ${this.idades}`)
    }
}

const chamaIdade = new idade()
chamaIdade.mostraIdade()

// Essa é uma visibilidade protected
// Ela só pode ser acessada atraves de um método criado dentro da propria classe


class times {
    private time = "Vasco"

    MostrarTime(){
        return this.time
    }
}

const chamatime = new times()
console.log(chamatime.MostrarTime())

// Essa é uma visibilidade private
// Ela só pode ser acessada atraves da chamada de um método
// Eles só podem ser acessados na classe que os definiu
