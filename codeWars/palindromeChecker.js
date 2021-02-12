/* Test the string and return a Boolean determining if the given string is a Palindrome */

function palindromeChecker (str) {
    let start = 0; 
    let end = str.length - 1
    while (end > start){
        let compareOne = str.charAt(start); 
        let compareTwo = str.charAt(end); 
        if (compareOne != compareTwo){
            return false
        }
        start += 1
        end -= 1
        }
        return true; 
}

// TESTS 

console.log(palindromeChecker('test')); // ==> false
console.log(palindromeChecker('mom')); // ==> true
console.log(palindromeChecker('racecar')); // ==> true
console.log(palindromeChecker('letter')); // ==> false
console.log(palindromeChecker('question')); // ==> false