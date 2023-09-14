const vaiSeHospedar = confirm ("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?")

/*Resolvido utilizando if

 if (vaiSeHospedar) {
   alert('Ótimo! Nós temos as melhores camas de toda a região!')}    
     else if(vaiSeHospedar === false){
     alert('Que pena! Você parecia ser uma pessoa mais legal')
     }

*/
    //Resolvido utilizando o switch
switch (vaiSeHospedar) {
    case true:
        alert('Ótimo! Nós temos as melhores camas de toda a região!')
        break;

    case false:
        alert('Que pena! Você parecia ser uma pessoa mais legal')
        break;
}