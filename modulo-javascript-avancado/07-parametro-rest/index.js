// function(a,b, ...args){


// }


function incetivarQuester(mensagem, ...nomesQuesters){
    console.log(nomesQuesters);
    
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`));
}

incetivarQuester('Parabéns por ter chego ao módulo de JavaScript Avançado', 'Juno', 'Cristian', 'roberto')