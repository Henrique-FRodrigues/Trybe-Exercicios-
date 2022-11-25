let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push("Cuidar do bebê");
tasksList.unshift("Dormir");

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

