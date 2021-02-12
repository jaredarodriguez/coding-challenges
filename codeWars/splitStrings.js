/* 

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

*/


function solution(str) {
    let strArr = str.split('')
    let start = 0; 
    let end = str.length; 
    let evenArr = []; 
    let oddArr = []; 

    if (end % 2 == 0) {
        for (let i = start; i < end; i+=2){
            evenArr.push(strArr[i] + strArr[i + 1])
        }
        return evenArr
    } else {
        for (let i = start; i < strArr.length - 1; i +=2){
            oddArr.push(strArr[i] + str[i + 1]);
        }
        oddArr.push(strArr[strArr.length - 1] + "_")
    }
    return oddArr; 
}



// TESTS 

console.log(solution("abcdefg")) // ==> ["ab", "cd", "ef", "g_"]
console.log(solution('drew'));  // ==> ["dr", "ew"]
