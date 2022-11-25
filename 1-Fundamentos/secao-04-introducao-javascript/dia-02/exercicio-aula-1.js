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

//let searchForFirstTask = tasksList[0];
//console.log("Procurando o primeiro item da lista: " + searchForFirstTask);


//let searchForLastTask = tasksList[tasksList.length - 1];
//console.log("Procurando o ultimo item da lista: " + searchForLastTask);
//console.log(tasksList.length);

//let foundMidleTasks = tasksList[tasksList.length / 2];
//console.log(foundMidleTasks); >>>>>>> tentar achar por outro for <<<<<<<<<<<<

