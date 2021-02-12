/* 

Flatten a nested array. You must account for varying levels of nesting.

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

*/ 

function steamrollArray(arr) {
    let flattenedArr = []; 
    var flatten = function (arg){
      if (!Array.isArray(arg)){
        flattenedArr.push(arg)
      } else {
        for (var a in arg){
          flatten(arg[a])
        }
      }
    }
    arr.forEach(flatten); 
    return flattenedArr; 
  }

  // or 

  function steamrollArray(arr){
    let flat = [].concat(...arr)
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat 
  }

//TESTS 

console.log(steamrollArray([[["a"]], [["b"]]])) // ==> should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) // ==> should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) // ==> should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // ==>  should return [1, {}, 3, 4].