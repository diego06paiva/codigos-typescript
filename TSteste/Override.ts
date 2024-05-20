class Animal {
    som(){
        console.log("Som")
    }
}

class cachorro extends Animal {
    som(){
        return `Au AU AU`
    }
}

const bob = new cachorro
console.log(bob.som())

// Esse é um exemplo de overrid quando uma classe herda de outra
// Mas tem uma mudança que se encaixe na lógica do código