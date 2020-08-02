// const a = {name: 'Teste'}
// console.log(a)

//const { prod, null } = require("mathjs")

// const b = a        //igualar a referência do objeto

// b.name = 'Opa'
// console.log(b)

// let c = 3
// let d = c
// d++
// console.log(d)

/// AGORA UNDEFINED
let valor
console.log(valor)     //não definido
//console.log(valor2)    // nem existe no código

valor = null    //ausência de valor
console.log(valor)

//console.log(valor.toString())    //n pode acessar uma variável que está nula, vai dar erro.
const produto = {}
console.log(produto.preco)   //preço n está definido
console.log(produto)
produto.preco = 4.50
console.log(produto)

produto.preco = undefined   // evite atribuir undefined
console.log(!!produto.preco)

console.log(produto)

produto.preco = null  //sem preço
console.log(!!produto.preco)
console.log(produto)


