
/* Comparing Array Structures */ 

function sameStructureAs(arr1, arr2) {
    if(arr1.length !== arr2.length){
      return false;
    }
    let comparisonTable = [];
    return compareArrays(arr1, arr2, comparisonTable);
  }
  
  function compareArrays(arr1, arr2, comparisonTable){
    for(let i = 0; i < arr1.length; i++) {
      if(typeof arr1[i] === typeof arr2[i]){
        if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          compareArrays(arr1[i], arr2[i], comparisonTable);
        } else {
          comparisonTable.push(true);
        }
      } else {
        comparisonTable.push(false);
      }
    }
    return !comparisonTable.includes(false);
  }

//   // Tests
// let input1 = [1,1,1]
// let input2 = [2,2,2]
// let input3 = [1, [1, 1]]
// let input4 = [2, [2, 2]]
// let input5 = [[2, 2], 2]

// console.log(sameStructureAs(input1, input2));
// console.log(sameStructureAs(input3, input4));
// console.log(sameStructureAs(input3, input5));


