function adicionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario');

    let textoDigitado = inputComentario[0].value;

    let novoscomentarios = document.getElementById('novos-comentarios')

   novoscomentarios.innerHTML += `<p>novos Comentario: ${textoDigitado}</p>`
   
}