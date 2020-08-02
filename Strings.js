const escola = "Cod3r"
console.log(escola.charAt(4))      // procura o que tem escrito na posição 4
console.log(escola.charCodeAt(3))  //procura o código associado ao char da string
console.log(escola.indexOf('3'))     //procura o que tem dentro do parâmetro dentro da string escola


console.log(escola.substring(1)) // começa a imprimir à partir do índex 1, no caso o "o"
console.log(escola.substring(0, 3)) // vai do índice 0 ao 3
console.log('Escola '.concat(escola).concat("!"))   //concatenar
console.log('Escola ' + escola +  "!")
console.log('Escola ' + escola +  "!")
console.log(escola.replace(3, 'e'))  //substitui dentro da string
console.log('Ana, Maria, Pedro'.split(','))  //gera um array com 3 elementos independentes separados por ,
