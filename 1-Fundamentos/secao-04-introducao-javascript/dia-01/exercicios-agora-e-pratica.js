//Exercícios - agora, a prática
//
//Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.
//
//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
//        Adição (a + b)
//        Subtração (a - b)
//        Multiplicação (a * b)
//        Divisão (a / b)
//        Módulo (a % b)


const a = 5;
const b = 10;

let adicao = a + b;
console.log(adicao);
let subtracao = a - b;
console.log(subtracao);
let multiplicacao = a * b;
console.log(multiplicacao);
let dividao = a / b;
console.log(dividao);
let modulo = a % b;
console.log(modulo);

console.log("----------------------------------");

//Utilize if/else para escrever um código que retorne o maior de dois números. 
//Defina, no começo do seu código, duas constantes com os valores que serão comparados. 

let c = 12;
let d = 20;
if (c > d) {
    console.log(c);
}
else if (d > c){
    console.log(d);
}
else{
    console.log('Nenhum dos números é maior que o outro');
}

console.log("----------------------------------");

//Utilize if/else para escrever um código que retorne o maior de três números. 
//Defina, no começo do seu código, três constantes com os valores que serão comparados. 

const idade1 = 21;
const idade2 = 12;
const idade3 = 45;

if (idade1 > idade2 && idade1 > idade3) {
    console.log(idade1);
} else if (idade2 > idade3 && idade2 > idade1) {
    console.log(idade2);
} else if (idade3 > idade2 && idade3 > idade1) {
    console.log(idade3);
} else {
    console.log("erro");
}

console.log("----------------------------------");

//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, 
//retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem
//positivo e nem negativo retorne “zero”. 

let number = -12;

if (number > 0) {
    console.log("Positivo");
}
else if (number < 0){
   console.log("Negative");
}
else {
    console.log("Zero");
}

console.log("----------------------------------");

//Utilize if/else para escrever um código que defina três constantes com os valores dos três 
//ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um 
//triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma 
//mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const A = 45;
const B = 75;
const C = 60;

if (A + B + C === 180  && A > 0 && B > 0 && C > 0) {
    console.log(true);
}
else {
    console.log(false);
}

console.log("----------------------------------");

//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne 
//os movimentos que ela faz.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras 
//maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras 
//minúsculas (lower case).
//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)
//const sentence = 'DoG';
//console.log(sentence.toLowerCase()); expected output: "dog"

const bispo = "bisPo";
switch (bispo.toLocaleLowerCase()){
    case "bispo":
        console.log("O bispo = diagonais");
        break;
    default:
        console.log("Essa peça não é o bispo");
}

console.log("----------------------------------");

//Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100)
//em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou 
//maior que 100.

let nota = 1000;
if (nota > 100){
    console.log("Erro");
}
else if (nota >= 90) {
    console.log("Você tirou A");
}
else if (nota >= 80) {
    console.log("Você tirou B");
}
else if (nota >= 70) {
    console.log("Você tirou C");
}
else if (nota >= 60){
    console.log("Você tirou D");
}
else if (nota >= 50){
    console.log("Você tirou E");
}
else if (nota < 50 && nota >= 0) {
    console.log("Você tirou F");
}
else {
    console.log("Erro");
}
console.log("----------------------------------");
//exercicio bonus
//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const y = 16;
const x = 20;
const j = 50;
let par = (y%2) === 0 || (x%2) === 0 || (j%2) === 0;
if (par === true) {
    console.log("Um ou mais números são pares");
}
else {
    console.log("Nenhum numero é par");
}

console.log("----------------------------------");

//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

let impar = (y%2) !== 0 || (x%2) !== 0 || (j%2) !== 0;
if (impar === true){
    console.log("Um ou mais números são impares");
}
else {
    console.log("Nenhum número é ímpar");
}

console.log("----------------------------------");
