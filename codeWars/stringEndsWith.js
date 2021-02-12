/* Complete the solution so that it returns true if the 
first argument(string) passed in ends with the 2nd argument 
(also a string). */

function solution(str, ending) {
    return ending ===  str.substr(str.length - ending.length, str.length);
}

console.log(solution('abc', 'abc')) // returns true
console.log(solution('fails', 'ails')) // returns true 
console.log(solution('!@#$%^&*() :-)', ':-)')) // returns true; 
// solution('abc', 'd') // returns false
