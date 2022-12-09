//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
//10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3.628.800  

let number = 10;
let somandoTudo = 1;

for(let indexSoma = 1; indexSoma <= number; indexSoma +=1){
    somandoTudo *= indexSoma;
};
console.log(somandoTudo);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Tryber';
let newWorld = word.split("", word.length);
//console.log(newWorld);
let reverse = [ ];
for (let inverter = newWorld.length -1 ; inverter >= 0; inverter -=1){
reverse.push(newWorld[inverter]);
}
console.log(reverse.join(""));
