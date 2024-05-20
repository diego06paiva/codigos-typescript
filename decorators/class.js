"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function meudecorador(decorador) {
    // Exibe uma mensagem indicando que o decorator está sendo chamado, juntamente com o nome da função construtora.
    console.log(`Chamando meu decorator ${decorador.name}`);
}
let chamaDecoratorr = class chamaDecoratorr {
    constructor(nome) {
        this.nome = nome;
    }
};
chamaDecoratorr = __decorate([
    meudecorador
], chamaDecoratorr);
const deco = new chamaDecoratorr("Teste");
console.log(deco);
// Este é um exemplo de uso de decorator em TypeScript.
// O decorator 'meudecorador' é aplicado à classe 'chamaDecorator' usando a sintaxe '@nomeDoDecorator'.
// Quando a classe é definida, o decorator é chamado e registra uma mensagem no console.
// Esse é um decorator de classe
