let ordens = [
    { cliente: 'Juno', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
   { cliente: 'Juno', tipo: 'compra', quantidade: 76, ativo: 'AAPLE34'},
   { cliente: 'Juno', tipo: 'compra', quantidade: 21, ativo: 'GOGL34'},

]

let quantidadeDeOrdens = ordens.reduce(function (somaOrdens, ordem){
    console.log('Ordem' , somaOrdens , ordem);
    return  somaOrdens + ordem.quantidade
}, 0 )

console.log(quantidadeDeOrdens);