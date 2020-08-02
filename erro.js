function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
     throw {                       //lanca uma maneira de substituir o erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {                         // permite testar a funcao
        console.log(obj.name.toUppercase() + '!!!!')
    } catch (e) {                 // em caso de erro, a funcao eh tratada com a outra no comeco do codigo
        tratarErroELancar(e)
    } finally {                   // conclusao da funcao
        console.log('final')
    }
}
   

const obj = { name:'Roberto'}

imprimirNomeGritado(obj)