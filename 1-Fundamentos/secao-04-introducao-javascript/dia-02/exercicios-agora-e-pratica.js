let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log(); 
for (let percorrer of numbers){
    console.log(percorrer);
}
console.log("------------------------------------------------");

//exercicio 2. Some todos os valores contidos no array e imprima o resultado; 
let resultadaAdicao = 0;
for (let index = 0; index < numbers.length; index += 1){  
    resultadaAdicao += numbers[index];    
}
console.log(resultadaAdicao);
console.log("------------------------------------------------");
//exercicio 3. Calcule e imprima a média aritmética dos valores contidos no array;
    //A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let divisao = resultadaAdicao / numbers.length ;
console.log(divisao);

console.log("------------------------------------------------");
//exercicio 4.Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20,
// imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 
//20”; 

if (divisao > 20){
    console.log('valor maior que 20');
}
else{
    console.log('valor menor ou igual a 20');
}

console.log("------------------------------------------------");
//exercicio 5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let descubraMaior = 0;
for(let indexMaior = 0; indexMaior < numbers.length; indexMaior += 1){
 if (numbers[indexMaior] > descubraMaior){
    descubraMaior = numbers[indexMaior];
 }   
}
console.log(descubraMaior);

console.log("------------------------------------------------");

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, 
//imprima a mensagem: “nenhum valor ímpar encontrado”; 

let imprimaImpar = 0;
for(let indexImpar = 0; indexImpar < numbers.length; indexImpar += 1){
    if (numbers[indexImpar]%2 !== 0){
        imprimaImpar = numbers[indexImpar];
        console.log(imprimaImpar);
    } 
}
if (imprimaImpar%2 === 0){
    console.log("Não tem valor impar");}
 
console.log("------------------------------------------------");

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
