//Desenvolva cada exercício a seguir utilizando funções:
//
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
//    Adição (a + b)
//    Subtração (a - b)
//    Multiplicação (a * b)
//    Divisão (a / b)
//    Módulo (a % b)
//
//Faça um programa que retorne o maior de dois números.Defina, no começo do programa, duas 
//constantes com os valores que serão comparados.
//
//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes 
//com os valores que serão comparados.
//
//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for 
//positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
//

let a = 10;
let b = 5;
function adicao(a,b){
    adicao = a + b;
    return adicao;
}
console.log(adicao(a,b));

console.log("---------------");

 function subtracao (a,b){
    subtracao = a -b;
    return subtracao
 }
 console.log(subtracao(a,b));

 console.log("---------------");

 function multiplicao(a,b){
    multiplicao = a * b;
    return multiplicao
 }
 console.log(multiplicao(a,b));

 function multiplicao1(a,b){ 
    return a * b
 }
 console.log('Segundo exemplo de função = ' + multiplicao1(a,b));

 console.log("---------------");

 function divisao(a,b) {
    return a / b 
 }
 console.log(divisao(a,b));

 console.log("---------------");

 function modulo(a,b){
    return a % b
 }
 console.log(modulo(a,b));

 console.log("---------------");

 const c = 38;
 const d = 51;
 function maior(c,d){
    if(c > d){
        return c
    }
    else {
        return d
    }
 }
 console.log(maior(c,d));

 console.log("---------------");

function qualMaior(a,b,c){
    let arrayNovo = [];
    let comparacaoMaior = 0;
    arrayNovo.push(a,b,c);
    //console.log(arrayNovo);
    for(let index = 1; index < arrayNovo.length; index += 1){
            if(arrayNovo[index] > comparacaoMaior){
                comparacaoMaior = arrayNovo[index];
            }
        }
    return comparacaoMaior
}
console.log(qualMaior(a,b,c,));

console.log("---------------");

function verification(a){
    if(a > 0){
        return 'positive'
    }
    else if(a < 0){
        return 'negative'
    }
    else {
        return 'zero'
    }
}
console.log(verification(a));

console.log("---------------");
//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
//Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//
//    Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//
//    Um ângulo será considerado inválido se não tiver um valor positivo.

const angulo1 = 50;
const angulo2 = 80;
const angulo3 = 55;
function triangle(angulo1, angulo2, angulo3){
    let comparation = 180;
    if(comparation === angulo1 + angulo2 + angulo3){
        return true
    }
    else { 
        return false
    }
}
console.log(triangle(angulo1, angulo2, angulo3));
