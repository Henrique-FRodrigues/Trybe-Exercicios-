

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//tasksList.push("Cuidar do bebê"); //acrescenta mais um valor para o array no final dos valores
//tasksList.unshift("Dormir"); // acrescenta um valor ao array no index [0]
//tasksList.pop(); // retira o ultimo da lista
//tasksList.shift(); // retira o primeiro da lista [0]

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask); //  Demonstra o numero da array de tal frase, no caso 1

console.log("-------------------------------");
//Demonstrar todos os indices do tasksList
for (let index = 0; index < tasksList.length; index +=1){
    console.log(tasksList[index]);
}

console.log("-------------------------------");

let searchForFirstTask = tasksList[0];
console.log("Procurando o primeiro item da lista: " + searchForFirstTask);

console.log("-------------------------------");

let searchForLastTask = tasksList[tasksList.length - 1];
console.log("Procurando o ultimo item da lista: " + searchForLastTask);
console.log(tasksList.length);

//let foundMidleTasks = tasksList[tasksList.length / 2];
//console.log(foundMidleTasks); 
// possivel logica, usar um comparativo da quantidade de length, entretando somente acesse o 
//[conteudo] se x === y, sendo <x> antes do [ ] e <y> depois.
//>>>>>>> tentar achar por outro for <<<<<<<<<<<<<

console.log("-------------------------------");

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
//Obtenha o valor “Serviços” do array menu: 
console.log(menuServices);

//Procure o índice do valor “Portfólio” do array menu: 
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

console.log("-------------------------------");

//fazendo a tabuada de 7

let numeroTabuada = 7;
for (let multiplicador = 1; multiplicador < 11; multiplicador += 1){
    console.log(numeroTabuada * [multiplicador]);
    console.log("************");
}

console.log("-------------------------------");

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let contador = 0; contador <= groceryList.length - 1; contador += 1){
    console.log(groceryList[contador]);
}

console.log("-------------------------------");

//percorra os nomes da array aprovados e imprada boas vindas com todos os nomes da lista
let aprovados = ['Joana', 'Maria', 'Ronaldo'];
//console.log(aprovados);
for (let bemVindos = 0; bemVindos < aprovados.length; bemVindos ++)
{
    console.log("Bem vindo aos novos alunos(as) da Trybe " + aprovados[bemVindos] + "!");
}

console.log("-------------------------------");

//conceito de for/of
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
// resultado: 
//1
//2
//3
//4
//5

console.log("-------------------------------");

for(let aproved of aprovados) {
    console.log(aproved);
  }

console.log("-------------------------------");

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

console.log("-------------------------------");

//adicionando + 1 em todos os valores entretando não irá alterar o valor da array somente imprimir um dado adicionando o outro
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
sum += 1
  //pode ser também sum *= 3;
  //30
  //60
  //90
  console.log(sum);
}
// 11
// 21
// 31

console.log("-------------------------------");

//Utilize o for/of para imprimir os elementos da lista names com o console.log()

for (let showNames of aprovados){
    console.log(showNames);
}