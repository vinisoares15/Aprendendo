const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'     
const template =`                            
    Olá
    ${nome}!`
console.log(concatenacao,template)
// nas linhas acima, usamos o template string com o sinal de crase "`" para fazer quebras de linha no meio da string
// expressões...
console.log(`1 + 1 = ${1 + 1}`)  //o uso do ${} é como se abrisse um console no meio do texto. 

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)   //nesse exemplo, há aplicação de uma função.