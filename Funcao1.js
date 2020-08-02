// função sem retorno
//toda função está associada à um bloco {}
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)        
imprimirSoma(2)     // soma o 2 com undefined
imprimirSoma(2, 10, 4, 5, 6, 7)    // usa apenas os 2 primeiros parÂmentros
imprimirSoma()

// função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 200))
console.log(soma(2))     //retorna 2 + o valor padrão que é 1