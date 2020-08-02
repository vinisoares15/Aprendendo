var numero = 1
{
    let numero = 2                          //o let só tem funcção dentro do bloco, logo, não será subescrito.
    console.log('dentro=', numero)          // assim, a resposta será dentro 2 e fora 1
}

console.log('fora =', numero)