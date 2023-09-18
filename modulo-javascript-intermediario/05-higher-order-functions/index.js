// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 9
//     let anoDeNascimento = 2023 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//      //(-- é igual a -1)

//      imprimir(anoDeNascimento)
// }


// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nasicmento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimento(26, 3, imprimirAnoDeNascimento)

// uma função retornando uma funcão
// function dobrar(numero){
//     return numero * 2
// }

// console.log(dobrar(9))

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}
let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(5))
console.log(triplicar(5))
console.log(quadruplicar(5))

