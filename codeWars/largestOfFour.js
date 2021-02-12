 /* Return an array consisting of the largest number from each 
 provided sub-array. For simplicity, the provided array will contain 
 exactly 4 sub-arrays. */

 //For Loop 

 function largestOfFour(arr){
    let largestArr = [-Infinity, -Infinity, -Infinity, -Infinity]; 

    for (arrayIndex = 0; arrayIndex < arr.length; arrayIndex++){
        for(subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++){
            if (arr[arrayIndex][subArrayIndex] > largestArr[arrayIndex]){
                arr[arrayIndex][subArrayIndex] = largestArr[arrayIndex]
            }
        }
    }
    return largestArr
}