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

//Utilize if/else para escrever um código que retorne o maior de três números. 
//Defina, no começo do seu código, três constantes com os valores que serão comparados. 

let idade1 = 21;
let idade2 = 12;
let idade3 = 45;

if (idade1 > idade2 && idade1 > idade3) {
    console.log(idade1);
} else if (idade2 > idade3 && idade2 > idade1) {
    console.log(idade2);
} else if (idade3 > idade2 && idade3 > idade1) {
    console.log(idade3);
} else {
    console.log("erro");
}


console.log(1);