/* Given an array of integers, remove the smallest value. 
Do not mutate the original array/list. If there are multiple 
elements with the same value, remove the one with a lower index.
If you get an empty array/list, return an empty array/list. */

function removeSmallest(numbers) {
        let low = { 
             num: Infinity, 
             idx: 0
        };
        for (let i = 0; i < numbers.length; i++){
            if (numbers[i] < low.num){
                low.num = numbers[i];
                low.idx= i; 
            }
        }       
            return numbers.slice(0, low.idx).concat(numbers.slice(low.idx + 1));
}


console.log(removeSmallest([1,2,3,4,5])) // => [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])) // => [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])) // => [2,2,2,1]