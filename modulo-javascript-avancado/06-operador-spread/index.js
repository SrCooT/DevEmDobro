const pessoa = [ 'juno' , 'SrCooT' , 'CooT']
console.log(...pessoa);


/* CONCATENAR DOIS ARRAYS */

// let pessoas1 = [ 'juno', 'SrCooT', 'CooT']
// let pessoas2 = [ 'Roberto', 'Ricardo', 'Raphael' ]

// pessoas1 = [ ...pessoas1, ...pessoas2 ]
// console.log(pessoas1);

/* CLONAR OBJETO */

const pessoas1 = {nome: 'Juno', idade: 26}

const objetoClonado = { ...pessoas1,}
console.log(objetoClonado);
console.log(pessoas1);