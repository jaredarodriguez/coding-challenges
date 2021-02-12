/*  Slice and Splice 

Use the array methods slice and splice to copy each element of 
the first array into the second array, in order.

Begin inserting elements at index n of the second array.
*/ 

function frankenSplice(arr1, arr2, n){
    let arr3 = arr2.splice(); 
    arr3.splice(n, 0, ...arr1)
    return arr3; 
}