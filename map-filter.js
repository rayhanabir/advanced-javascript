const numbers = [2, 4, 6, 8, 10];
// const arr = [];
// for(let i = 0; i<numbers.length;i++){
//     const element = numbers[i];
//     const result = element * element;
//     arr.push(result);
// }
// console.log(arr);

// function square(element){
//     return element * element;
//     console.log(element);
// }
// const square = element =>element*element;
// const square = x =>x*x;

const result =  numbers.map(x=>x*x)
// console.log(result);
// numbers.map(function(element, index, array){
//     console.log(element,index,array);
// })
const bigger = numbers.filter(x=> x > 6);
// console.log(bigger);

const isThere = numbers.find(x => x>4);
console.log(isThere);