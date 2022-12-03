let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log(); 
for (let percorrer of numbers){
    console.log(percorrer);
}
console.log("------------------------------------------------");

//Some todos os valores contidos no array e imprima o resultado; 
let resultadaAdicao = 0;
for (let index = 0; index < numbers.length; index += 1){  
    resultadaAdicao += numbers[index];    
}
console.log(resultadaAdicao);
console.log("------------------------------------------------");
//Calcule e imprima a média aritmética dos valores contidos no array;

    //A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
//let divida = ;   
let divisao = resultadaAdicao / numbers.length ;
console.log(divisao);

    //let divisao = resultadaAdicao / 