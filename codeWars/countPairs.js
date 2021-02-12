/* 

Given an integer k and a list of integers, count the number of distinct valid pairs of integers (a, b)
in the list for which a + k = b. Two pairs of integers (a, b) and (c, d) are considered distinct if at
least one element of (a, b) does not also belong to (c, d)


*/


function countPairs(numbers, k){ 
    let numbersSet = new Set(numbers)
    let uniqueArr = Array.from(numbersSet); 
    let counter = 0;  
    for (let i = 0; i < uniqueArr.length; i++){
        for (let j = 0; j < uniqueArr.length; j++){
            if (uniqueArr[i] + k == uniqueArr[j]){
                counter += 1
            }
        }
    }
    return counter; 
}

// TESTS 

console.log(countPairs([1, 1, 2, 2, 3, 3], 1)) // ==> 2
console.log(countPairs([1, 2, 3, 4, 5, 6], 2)) // ==> 2 
console.log(countPairs([1, 2, 5, 6, 9, 10], 2)) // ==> 0 