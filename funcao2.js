// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variável
// a arrow (=>) funciona da mesma forma que "function"

const soma = (a , b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b   // tira a necessidade do bloco {} e do "return", porém só funciona em uma linha. 
console.log(subtracao(2, 3))


const imprimir2 = a => console.log(a)
imprimir2('!!DOIDEERA!1')

