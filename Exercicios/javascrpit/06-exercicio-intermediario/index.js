//Exemplo 1
const btnTrocaCor = document.getElementById("btn-troca-cor");

const quadradoAzul = document.querySelector(".azul");


btnTrocaCor.addEventListener('click',trocarCor);
function trocarCor(){
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo");
}

// //Exemplo 2 
// function alterarCorDeFundo() {
//     let quadro = document.getElementsByClassName('quadrado');

//    let primeiroQuadro = quadro[0];
//     primeiroQuadro.style.backgroundColor = 'yellow';
//  } 
