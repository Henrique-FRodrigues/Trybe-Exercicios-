
//let array = [5,3,9];
//for (let index = 1; index < array.length; index += 1) {
    //console.log(array[index]);
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//        //console.log(array[secondIndex]);
//      if (array[index] < array[secondIndex]) {
//        let position = array[index];
//       array[index] = array[secondIndex];
//      array[secondIndex] = position;
//     }
//   }
// }
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 1; index < numbers.length; index +=1){
    for(let looping = 0; looping < numbers.length; looping +=1){ 
        if(numbers[index] < numbers[looping]) {
            let change = numbers[index];
            numbers[index] = numbers[looping];
            numbers[looping] = change;   
        }
    }
}
//console.log(numbers);
let renovando = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = [];
for(let index2 = 0; index2 < renovando.length; index2 +=1){
    for(let index3 = 1; index3 < renovando.length; index3 +=1){
        if(index2 < renovando.length -1){
        novo.push(renovando[index2] * renovando[index3]);
        }
        else if(index2 <= renovando.length){
        novo.push(renovando[index2] * 2);
        }   
    }
}
console.log(novo);

