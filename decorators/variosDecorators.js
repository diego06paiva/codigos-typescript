"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function a() {
    return function (target, properkey, descriptor) {
        console.log('decorator: a');
    };
}
function b() {
    return function (target, properkey, descriptor) {
        console.log('decorator: b');
    };
}
function c() {
    return function (target, properkey, descriptor) {
        console.log('decorator: c');
    };
}
class decorador {
    teste() {
        console.log('a');
    }
}
__decorate([
    a(),
    b(),
    c()
], decorador.prototype, "teste", null);
// Dessa forma se faz multiplos decorators
// É preciso desses argumentos para eles poderem funcionar corretamente
// Esses são decorators de função
// Primeiro vem o c, b, a
// Vem nessa ordem pq ele pega de baixo para cima as funções
// Por isso a função c vem primeiro
