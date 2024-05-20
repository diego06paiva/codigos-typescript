function a(){
    return function(target: any, properkey:string, descriptor: PropertyDescriptor){
        console.log('decorator: a')
    }
}

function b(){
    return function(target: any, properkey:string, descriptor: PropertyDescriptor){
        console.log('decorator: b')
    }
}

function c(){
    return function(target: any, properkey:string, descriptor: PropertyDescriptor){
        console.log('decorator: c')
    }
}



class decorador {
    @a()
    @b()
    @c()
    teste(){
        console.log('a')
    }
}

// Dessa forma se faz multiplos decorators
// É preciso desses argumentos para eles poderem funcionar corretamente
// Esses são decorators de função
// Primeiro vem o c, b, a
// Vem nessa ordem pq ele pega de baixo para cima as funções
// Por isso a função c vem primeiro