function colocarAguaParaFerver() {
    console.log('colocar água para ferver');


    setTimeout(() => {
        console.log('Aguá ferveu')
        passarOCafé()
    }, 5000);

}

function prepararPraPassarOCafé() {
    console.log('Pegar o pó de café');
    console.log('pegar o filtro de café');
    console.log('colocar o cagé no filtro');
    console.log('colocar o filtro em cima');
}

function passarOCafé() {
    console.log('passando o café');
}

colocarAguaParaFerver()
prepararPraPassarOCafé()
