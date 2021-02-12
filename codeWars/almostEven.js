/* 


We need the ability to divide an unknown integer into a given 
number of even parts — or at least as even as they can be. 
The sum of the parts should be the original value, but each
part should be an integer, and they should be as close as 
possible.

Complete the function so that it returns an array of integer 
representing the parts. Ignoring the order of the parts, there 
is only one valid solution for each input to your function!

*/

var splitInteger = function(num, parts) {
  let baseNum = Math.floor(num / parts); 
  let partsAffected =  num % baseNum;
  let valueToAdd = (num - (baseNum * parts)) / partsAffected; 
  let arr = [];
  let oddArr = [];
    
  for (let i = 0; i < parts; i++) {
          arr.push(baseNum);
  };
  if (partsAffected === 0) {
      return arr; 
  }
  let start = arr.length - partsAffected; 
  for (let i = start; i < arr.length; i++) {
      oddArr.push(arr[i] + valueToAdd); 
  }
  let newArr = arr.splice(start, partsAffected, oddArr)
  return arr.reduce((acc, val) => {
      Array.isArray(val) ? acc.concat(val) :
      acc.concat(val)
  }) 
}

console.log(splitInteger(10, 1));
console.log(splitInteger(2, 2));
console.log(splitInteger(20, 5));
console.log(splitInteger(20, 6));