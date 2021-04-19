const students = [
    {id:2, name:'ibrahim'},
    {id:3, name:'mamun'},
    {id:4, name:'shamim'}
]
// const bondhu = [];
// for(let i = 0; i<students.length;i++){
//     const element = students[i].name;
//     const result =  bondhu.push(element);

// }
// console.log(bondhu);

const sName =students.map(s =>s.name);
const bigger = students.filter(s =>s.id>2);
const biggerOne = students.find(x => x.id>2);
console.log(biggerOne);
// console.log(bigger);
// console.log(sName);