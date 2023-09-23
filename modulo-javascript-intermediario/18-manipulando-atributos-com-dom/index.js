function alterarCorDeFundoPrimeiroPost() {
    let post = document.getElementsByClassName('texto-post');

    let primeiroPost = post[0];
    primeiroPost.style.backgroundColor = 'red';
}


function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('fonte-grande');

    console.log(textoPosts[1].classList)
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino');

    let radioFeminino = document.getElementById('genero-feminino');

    if(genero === 'M'){
        radioMasculino.checked = true;
    }else if(genero === 'F') {
        radioFeminino.checked = true;
    }


}