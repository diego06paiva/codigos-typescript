function meudecorador(decorador: Function){
    // Exibe uma mensagem indicando que o decorator está sendo chamado, juntamente com o nome da função construtora.
   console.log(`Chamando meu decorator ${decorador.name}`)
}

@meudecorador
class chamaDecoratorr {

    nome 
    
   constructor(nome:string) {
       this.nome = nome
   }
}

const deco = new chamaDecoratorr("Teste")
console.log(deco)
// Este é um exemplo de uso de decorator em TypeScript.
// O decorator 'meudecorador' é aplicado à classe 'chamaDecorator' usando a sintaxe '@nomeDoDecorator'.
// Quando a classe é definida, o decorator é chamado e registra uma mensagem no console.
// Esse é um decorator de classe
