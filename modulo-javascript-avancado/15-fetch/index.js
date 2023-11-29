document.getElementById('tirar-carta').addEventListener('click', ()=>{
    umaCartaDoBaralho()
})

async function selecionarCartaAleatoria() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

selecionarCartaAleatoria()

async function cartaAleatoria(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
    const resposta = await fetch(url)
    return await resposta.json()
}
async function umaCartaDoBaralho() {
    const baralho = await selecionarCartaAleatoria()
    const carta = await cartaAleatoria(baralho.deck_id)

    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
}

umaCartaDoBaralho()
console.log('segue o fluxo sem esperar');