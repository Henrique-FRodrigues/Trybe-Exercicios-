

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