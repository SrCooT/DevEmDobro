

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [ 
//         { nome: 'Final Fantasy'},
//         {nome: 'Fallout'} 
//     ]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Juno',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'fifa'},
            { nome: 'Final fnatasy'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[1].nome)