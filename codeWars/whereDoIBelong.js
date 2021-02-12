/*  Where Do I Belong 

Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has 
been sorted. The returned value should be a number.

*/ 

function getIndexToIns(arr, num) {
    let newArray = arr.push(num)
    let sortedArray = arr.sort(function(a, b) {
    return a - b;
  })
    return sortedArray.indexOf(num)
  }