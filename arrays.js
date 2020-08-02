const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10                // adiciona o valor ao elemento 4 do array
console.log(valores[4])
console.log(valores.length)  // diz a quantidade de elementos no array

valores.push({ id: 3 }, false, null, 'teste')      //função push adiciona elementos no array
console.log(valores)

console.log(valores.pop())      // pega o último valor do array e printa ele
delete valores[0]               //deleta valores do array
console.log(valores)

console.log(typeof valores)