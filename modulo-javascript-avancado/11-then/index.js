

let ferverAgua = (chaleiraEstanoFogo, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstanoFogo && fogaoEstaLigado){
            console.log('começando o processo de ferver a agua');
            resolve()
        }else{
            console.log('Necessario ligar o fogao para ferver a agua');
            reject()
        }
    })
}

let chaleiraEstanoFogo = true
let fogaoEstaLigado = true

let passarCafe = () =>console.log('passando o café ');
    

ferverAgua(chaleiraEstanoFogo, fogaoEstaLigado).then(passarCafe)
console.log('fazendo o cafe');