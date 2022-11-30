//let car = 'Fiat';

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

  //notação de ponto: car.type
  //notação de colchetes: car[type]
  //essas duas notações servem para chamar o índice (chave-valor)


  let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
  //diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo

  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
 
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4
  console.log(conta['banco']['nome']); //TrybeBank

  let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com
console.log(usuario['infoPessoal']['sobrenome']); // Peralta
console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  

  console.log(moradores['0']['nome']);// Luiza

  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  console.log('---------------------');

  //exercicio pratico da aula
//Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, 
//e concatene as suas informações para imprimir no console uma mensagem no seguinte 
//formato: “A jogadora Marta Silva tem 34 anos de idade”. 

let meuObjeto = {
    chave:{
        name1 : 'Marta',
        lastName1 : 'Silva',
        age1 : 34,
        medals : { 
                golden: 2,
                silver: 3,},
    },
};

 
//let meuObjeto = chave;
console.log(meuObjeto);
console.log('A jogadora ' + meuObjeto.chave.name1 + ' ' + meuObjeto.chave.lastName1 + ' tem ' + meuObjeto.chave.age1 + ' anos de idade.');

console.log('---------------------');

//Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no 
//seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”. 
meuObjeto.chave.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log('A jogadora ' + meuObjeto.chave.name1 + ' ' + meuObjeto.chave.lastName1 + " foi eleita a melhor do mundo por " + meuObjeto.chave.bestInTheWorld.length + ' vezes.');

console.log('---------------------');

//Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte 
//formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”. 
console.log('A jogadora possui ' + meuObjeto.chave.medals.golden + ' medalhas de ouro e ' + meuObjeto.chave.medals.silver + ' medalhas de prata.');