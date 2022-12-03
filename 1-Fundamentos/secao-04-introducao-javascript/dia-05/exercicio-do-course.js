
 //#var, let e const



function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();

  console.log('--------------------------------');

  if (true) {
    // inicio do escopo do if
    var userAge = '20'; //<let> e <const> não conseguem fazer o acesso fora do if, mas <var> consegue 
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

  console.log('--------------------------------');

  const favoriteLanguage = 'Javascript';
//favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

console.log('--------------------------------');

// pode se usar let, var e const que a propriedade do .name vai mudar de qualquer forma
const userInfo2 = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo2.name = 'João';
  
  console.log(userInfo2); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

  console.log('--------------------------------');

  const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

//technologies = ['Javascript', 'CSS', 'HTML', 'React'] >>>>> não da pra adicionar  ou remover um valor 
//na array igual no let ou var so de mencionar, tem que usar comando como .push(); .sort(), .unshift()
console.log(technologies); // Erro se for adicionar um valor a array, no caso no ultimo "espaço criado"
                           // ao invés de colocar o .push()