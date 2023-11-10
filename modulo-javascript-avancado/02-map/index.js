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