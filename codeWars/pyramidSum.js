/*  Pyramid Sum 

write a function that takes in a base array of numbers. It should return a 2D
array where every new array is the adjacent sum of the previous array starting
with the base. The adjacent sum is the sum of the previous 2 elements of an 
array. Example: [1,2,3,4] will be [3,5,7] because 1+2=3, 2+3=5, 3+4=7.

*/

function pyramidSum(array) {
    let pyramid = [array];
    for (let j = 0; j < array.length; j++){
        if (j + 1 < array.length){
            let previousLevel = pyramid[0];
            let nextLevel = adjacentSum(previousLevel);
            pyramid.unshift(nextLevel);
        }
    }
    return pyramid
}

