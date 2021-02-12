/* 

Write an algorithm that takes an array and moves all of the 
zeros to the end, preserving the order of the other elements.

*/

var moveZeros = function (arr) {
    let zeros = []; 
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        }
        else if (arr[i] !== 0) {
            newArr.push(arr[i]);
        } 
    }
    return newArr.concat(zeros);
}


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));