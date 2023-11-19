let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 27 }
]

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i++) {

//     nomeDasPessoas.push(pessoas[i].nome)   

// }
// console.log(nomeDasPessoas);

// let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " Anos de idade");
// console.log(nomeDasPessoas);


let idadeDasPessoas =  pessoas.map(pessoas => pessoas.idade + " anos e se chama " +  pessoas.nome)
console.log(idadeDasPessoas);


const array1 = [ 1, 5, 6, 8]

const map1 = array1.map((number) => number * 2);

console.log(map1);


let pessoas1 = [
    {nome: 'CooT', idade: 23},
    {nome: 'SrBlack', idade: 20},
    {nome: 'Juno', idade: 26}
]

let nomeDasPessoas = pessoas1.map(pessoas1 => pessoas1.nome + " tem " + pessoas1.idade + ' de idade ');

console.log(nomeDasPessoas);



