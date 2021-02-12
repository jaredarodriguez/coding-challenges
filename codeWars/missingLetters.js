/* 

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/


function fearNotLetter (str) {
    for (let i = 0; i < str.length; i++){
        var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i){
        return String.fromCharCode(code - 1)
    }
    }
    return undefined; 
}


// TESTS 

console.log(fearNotLetter("abce")) // ==>  "d".
console.log(fearNotLetter("abcdefghjklmno")) // ==>  "i".
console.log(fearNotLetter("stvwx")) // ==>  "u".
console.log(fearNotLetter("bcdf")) // ==>  "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // ==>  undefined.
