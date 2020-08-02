// novo recurso ecma 2015

const pessoa = {
    nome: 'Ana',
    idade:5,
    endereco: {
        logradouro: 'Rua AbC',
        numero: 1000
    }
}
//destructing faz a desestruturação de  um elemento. no caso, o elemento Pessoa:

const { nome, idade } = pessoa  // tire dde dentro do objeto, os atributos nome e idade, qual objeto? pessoa.
console.log(nome, idade)

const { nome: n, idade: i} = pessoa  //faz a mesma coisa que o de cima, só que atribui outro nome pras variáveis, no caso"n" e "i"
console.log(n , i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num} } = pessoa    //como esses valores n existem dentro do obj pessoa, vai dar erro.
//console.log(ag, num)