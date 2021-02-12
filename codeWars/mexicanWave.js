/* 
In this simple Kata your task is to create a function that 
turns a string into a Mexican Wave. You will be passed a 
string and you must return that string in an array where 
an uppercase letter is a person standing up.

1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over 
    as if it was an empty seat.
*/

function wave(str) {
    let waves = []; 
    str.split('').forEach((char, index) => {
        if (/[a-z]/.test(char)) {
        waves.push(str.slice(0, index) + char.toUpperCase() + str.slice(index+1));
        }
    })
    return waves; 
}


console.log(wave("hello")); // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

