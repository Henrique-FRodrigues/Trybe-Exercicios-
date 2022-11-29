//Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior
// que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

let fruits = [3, 4, 10, 1, 12];
let sum = 0;
for (let index = 0; index < fruits.length; index += 1) {  
  sum += fruits[index];
}

if (sum > 15){
    console.log("O valor total de fruta é = " + sum);
} else {
    console.log("Valor menor que 16");
}

console.log("---------------------------");

//fixando aprendizagem

//Utilizando a lógica apresentada acima, qual deve ser o valor salvo na variável n
//para que o resultado impresso pelo console.log seja 55?

const n = 9 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);

console.log("---------------------------");

//Escolha a opção que melhor substitui a linha com o "?"

const num = 5;

let resultadoo = 0;
for (let index = 0; index <= num; index += 1) {
  resultadoo += index;
};
console.log(resultado)

console.log("---------------------------");

a = 5;
b = 7;
c = 3;
d = 9;

let verificarVAlor = (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) );
console.log(verificarVAlor);

console.log("---------------------------");

let somaDeTudo = 100;
let somandoTudo = 0;

for(let indexSoma = 0; indexSoma <= somaDeTudo; indexSoma +=1){
    somandoTudo += indexSoma;
};
console.log(somandoTudo);

console.log("---------------------------");

let items = ["Big Mac", "Big Tasty", "Batata Frita"];
let prices = [10, 20, 30, 40];

for (indexTudo = 0; indexTudo < items.length && indexTudo < prices.length; indexTudo +=1){
    console.log(items[indexTudo] + " = R$" + prices[indexTudo]);
}
