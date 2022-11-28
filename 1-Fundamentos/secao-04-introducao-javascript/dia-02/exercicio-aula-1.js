//Operadores lógicos

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

console.log("------------------------------------------");

//Operador E >>>> &&
const comida = 'pão na chapa';
const bebida = 'cafézinho';
if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

console.log("------------------------------------------");

//Operador E >>>> &&
const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);

console.log("------------------------------------------"); 

//Operador E >>>> &&
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;
const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

console.log("------------------------------------------");

//Operador E >>>> &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("------------------------------------------");

//Operador precedente
let a = 4 ** 3 ** 2; // Como resolver >> 4 ** (3 ** 2); = 262144
console.log(a);
let b = 1 + 2 ** 3 * 4 / 5; // Como resolver = 1 +(((2 ** 3)* 4) / 5) = 7,4;
console.log(b);

console.log("------------------------------------------");

//Operador E >>>> &&
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

console.log("------------------------------------------");

//Operador OR >>> ||
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

console.log("------------------------------------------");

//Operador OR >>> ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("------------------------------------------");

//Operador OR >>> ||
let weekDay = "terça";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "sabádo" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU!!!");
}
else {
    console.log("Não existe esse dia da semana, tente novamente colocar um dia válido, tente por exemplo (quarta-feira)");
}

console.log("------------------------------------------");

//Operador NOT
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false

console.log(!42); // false
console.log(!0); // true >>> O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
console.log(!null); // true
console.log(!undefined + " Observe esse caso"); // true >> Um valor falsy é um valor que pode ser avaliado como FALSE, por exemplo, quando verificamos uma variável. Há apenas seis valores falsy em JavaScript: undefined , null , NaN , 0 , "" (string vazia) e, naturalmente, false

console.log("------------------------------------------");

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
//console.log(foundMidleTasks); 
// possivel logica, usar um comparativo da quantidade de length, entretando somente acesse o 
//[conteudo] se x === y, sendo <x> antes do [ ] e <y> depois.
//>>>>>>> tentar achar por outro for <<<<<<<<<<<<

