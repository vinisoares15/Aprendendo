{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123  // variável definida dentro de uma função, só existe dentro da própria funcção.
    console.log(local)   //logo, não poderá ser chamada fora do bloco {} com o console.log
}

teste()
//console.log(local)