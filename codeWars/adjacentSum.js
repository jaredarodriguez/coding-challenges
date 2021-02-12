/* Adjacent Sum

Given an array of integers return a new array with the adjacent sum of each integer's pair

*/

function adjacentSum(array){ 
    let newArray = []; 
    for (let i = 0; i < array.length; i++){
        if (i + 1 < array.length){
            newArray.push(array[i] + array[i + 1])
        }
    }
    return newArray; 
}
