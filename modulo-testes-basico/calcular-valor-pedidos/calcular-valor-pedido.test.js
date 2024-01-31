const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve cobrar valor de frete quando o valor do produto for superior a 500', () =>{
    //AAA - 3 passos de criação de um test


    // ARRANGE - ARRUMAR = O OBJETO DE TESTE

    const meuPedido = {
        itens: [
            { nome: 'Arco Encantado', valor: 2000 },
            {nome: 'Entrega', valor: 100, entrega: true }
        ]
    }
    // ACT - AÇÃO = OQUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);

    // ASSERT - ASSERÇÃO =  RESULTADO ESPERADO    
    expect(resultado).toBe(2000)
});

it('Deve cobrar o valor de frete quando valor dos produtos for menor que 500', () =>{
      // ARRANGE - ARRUMAR = O OBJETO DE TESTE

      const meuPedido = {
        itens: [
            { nome: 'Hamburgue', valor: 50 },
            {nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    // ACT
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT
    expect(resultado).toBe(150);
});

it('Deve cobrar o valor de frete caso valor dos produtos seja EXATANEnte 500',() => {
    
    const meuPedido = {
        itens: [
            {nome: 'sanduiche bem caro', valor:500 },
            {nome: 'entrega', valor:100, entrega : true }, 
        ]
    };
    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);
});

/*Caso a entrega sem em RS ou SC deve acrecentar um valor na entrega*/ 

it('Deve adicionar um acrescimo de 20% no valor da entrga do pedido caso o estado seja RS', ()=> {
    const PedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            {nome: 'sanduiche bem caro', valor:500 },
            {nome: 'entrega', valor:100, entrega : true }, 
        ]
    };

    const resultado = calcularValorPedido(PedidoComEstadoRS);

    expect(resultado).toBe(620);
});

it('Deve adicionar um acrescimo de 20% no valor da entrga do pedido caso o estado seja SC', ()=> {
    const PedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            {nome: 'sanduiche bem caro', valor:500 },
            {nome: 'entrega', valor:100, entrega : true }, 
        ]
    };

    const resultado = calcularValorPedido(PedidoComEstadoSC);

    expect(resultado).toBe(620);
});

it('não deve adicionar um acrescimo de 20% no valor da entrga do pedido caso o estado seja SP', ()=> {
    const PedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            {nome: 'sanduiche bem caro', valor:500 },
            {nome: 'entrega', valor:100, entrega : true }, 
        ]
    };

    const resultado = calcularValorPedido(PedidoComEstadoSP);

    expect(resultado).toBe(600);
});