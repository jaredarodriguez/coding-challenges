/* We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. 
The input numbers are strings and the function must return a string.
*/

function add(a, b){
    let aNum = parseInt(a); 
    let bNum = parseInt(b); 
    let newNum = aNum + bNum; 

    return newNum.toString(); 

}


//TESTS 

console.log(add("123", "321")); // "444"
console.log(add("11", "99")); //  "110"
