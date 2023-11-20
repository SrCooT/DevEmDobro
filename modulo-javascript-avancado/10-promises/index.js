/*

    Pendente
    Realizada resolve
    Recusada Reject
    Estabelecida

// */

// new Promise((resolve, Reject) => {

// })


let ferveragua = (chaleiraEstanoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstanoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver água');
            resolve()
        } else {
            console.log('é necessário ligar o fogao e colocar a chaleira no fogão para ferver a água');
            reject()
        }
    })
}

let chaleiraEstanoFogao = true
let fogaoEstaLigado =  true

ferveragua(chaleiraEstanoFogao, fogaoEstaLigado)
console.log('fazendo café');
