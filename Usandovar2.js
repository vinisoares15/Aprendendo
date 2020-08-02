var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)         //a var só não é subescrita dentro de uma function, logo, teremos dentro =2 e fora =2
}

console.log('fora=', numero)