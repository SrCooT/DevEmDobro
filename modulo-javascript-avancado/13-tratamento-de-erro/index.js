
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao != 'boolean') throw('somente o tipo booleano é aceito')

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('passo 1 finalizado: Água foi fervida');
            resolve(true)
        } else {
            const mensagemDeErro = 'é necessário colocar a chaleura com a água e ligar o fogão senão teu cafézinho nao vai ficar pornto nunca';
            reject(mensagemDeErro)
        }
    })
}
let passarOcafe = (aguaFervida) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('passo 2 finalizado: passado o café');
            resolve(true)
        } else {
            console.log('é necessário colocar a chaleura com a água e ligar o fogão senão teu cafézinho nao vai ficar pornto nunca');
            reject()
        }
    })
}
let tomaCafe = (cafePassado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('passo 3 finalizado: bebendo o café');
            resolve(true)
        } else {
            console.log('é necessário colocar a chaleura com a água e ligar o fogão senão teu cafézinho nao vai ficar pornto nunca');
            reject()
        }
    })
}
let lavarXicara = (cafeTomado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('passo 4 finalizado: lavar a xicara');
            resolve(true)
        } else {
            console.log('é necessário colocar a chaleura com a água e ligar o fogão senão teu cafézinho nao vai ficar pornto nunca');
            reject()
        }
    })
}
let chaleiraEstaNoFogao = 'true'
let fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOcafe(aguaFervida)
        const cafeTomado = await tomaCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)

    } catch (err) {
        console.log(err);
    } finally {
        console.log('finalizado o ritual de tomar o cafe,bora para os estudos ');
    }
}

iniciarProcessoDeFazerCafe()