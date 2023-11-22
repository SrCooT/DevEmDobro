let ferverAgua = (chaleiraEstanoFogo, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstanoFogo && fogaoEstaLigado){
            console.log('passo 1 finalizado ferveu a agua');
            resolve()
        }else{
            console.log('Necessario ligar o fogao para ferver a agua');
            reject()
        }
    })
}

let passarCafe = (aguaFervida) => {
    new Promise((resolve) => {
        console.log('passo 2 finalizado: café foi passado');
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('passo 3 finalizado: terminei de tomar o café');
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('passo 4 finalizado: terminei de lavar a xícara');
        resolve(true)
    })
}


let chaleiraEstanoFogo = true
let fogaoEstaLigado = true


    

ferverAgua(chaleiraEstanoFogo, fogaoEstaLigado)
.then(() => {
    return passarCafe()
})
.then(() => {
    return tomarCafe()
})
.then(() => {
    return lavarXicara()
})
.then(() => {
    console.log('Finalizado o processo de fazer um café, bora trabalha');
});
