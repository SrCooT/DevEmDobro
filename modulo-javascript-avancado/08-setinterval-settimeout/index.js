// setTimeout(function(){
//     alert('Olá,Mundo')
// },3000);


// setTimeout(() => {
//     console.log('console dentro do setTimeout');
// }, 4000);

// setInterval(() => {
//     console.log('Executando a cada 2 segundo');
// }, 2000);

// console.log('console depois do setTimeout');

const  idDoIntervalo = setInterval(() => {
    console.log('Executando a cada  2 segundo');
},2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);
clearTimeout()
