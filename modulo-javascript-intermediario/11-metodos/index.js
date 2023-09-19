let usuario = {
    nome: 'Juno',
    excluir: function(){
        console.log('o usuario ' + this.nome + ' foi excluido')
    }
}

usuario.excluir()