const prod1 = {}                    //cria um objeto vazio. Diferente  de array que é com []
prod1.nome = 'Celular Ultra Mega'   //todo objeto possui um conjunto "chave: valor"
                                     //nesse caso, nome é a chave e Celular ultra mega é o valor
prod1.preço = 4998.90
prod1['Desconto Legal'] = 0.40    // permite criar uma chave com palavras separadas. Desconto e Legal

console.log(prod1)
//outra  maneira de criar objetos: Colocando tudo entre chaves.
const prod2 = {
    nome: 'Camisa polo',
    preço: 79.90 ,
    obj: {
        blabla: 2 
    }
}

console.log(prod2)