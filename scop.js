
let bonus  = 20; //eta global variable. function er vitore and bahire use kora jabe.
function sum (first, second){
    let result =  first + second + bonus ;//result variable k function er bahir theke call kora jabe nah. korle eror dibe.eta local variable .
    // console.log(bonus);
    if(result>9){
        let mood = 'happy';
        mood = 'fishy';
        mood = 'funky';
        // console.log(mood); ekhane log kora jabe . cz eta block er vitore ache .
    }
     console.log(mood);// ekhane log kora jabe nah . eta block scope 
    return result;
    

}
const output = sum(3, 7);
// console.log(bonus);
// console.log(output);

// console.log(output);