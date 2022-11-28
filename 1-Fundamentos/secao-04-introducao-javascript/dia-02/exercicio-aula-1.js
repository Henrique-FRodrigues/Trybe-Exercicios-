let candidata = 69;

if (candidata >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
    } 
    else if (candidata < 80 && candidata >= 60){
    console.log("Você está na nossa lista de espera");
    }
    else if (candidata < 60)
    {
    console.log("Você foi reprovado(a)");
    }
    else {
    console.log("error");
}

const comida = 'pão na chapa';
const bebida = 'cafézinho';
if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}


const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);
    
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;
const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let a = 4 ** 3 ** 2; // Como resolver >> 4 ** (3 ** 2); = 262144
console.log(a);
let b = 1 + 2 ** 3 * 4 / 5; // Como resolver = 1 +(((2 ** 3)* 4) / 5) = 7,4;
console.log(b);

const currentHour = 5;
let message;
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir.";
}
else if (currentHour < 22 &&  currentHour >= 18) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour < 18 && currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour < 14 && currentHour > 11) {
    message = "Hora do almoço!!!";
}
else if (currentHour < 11 && currentHour > 4) {
    message = "Hmmm, cheiro de café recém-passado";
}
else {
    message = "Dormindo";
}
console.log(message);

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//tasksList.push("Cuidar do bebê"); //acrescenta mais um valor para o array no final dos valores
//tasksList.unshift("Dormir"); // acrescenta um valor ao array no index [0]
//tasksList.pop(); // retira o ultimo da lista
//tasksList.shift(); // retira o primeiro da lista

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask); //  Demonstra o numero da array de tal frase, no caso 1

for (let index = 0; index < tasksList.length; index +=1){
    console.log(tasksList[index]);
}



let searchForFirstTask = tasksList[0];
console.log("Procurando o primeiro item da lista: " + searchForFirstTask);


let searchForLastTask = tasksList[tasksList.length - 1];
console.log("Procurando o ultimo item da lista: " + searchForLastTask);
console.log(tasksList.length);

//let foundMidleTasks = tasksList[tasksList.length / 2];
//console.log(foundMidleTasks); >>>>>>> tentar achar por outro for <<<<<<<<<<<<

