/* 

Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.

*/ 

function capitalize(str) {
    let strArr = str.split(' '); 
    let answer = strArr.map(e => {
        return e[0].toUpperCase() + e.substring(1);
    })
    return answer.join(' ');
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));
