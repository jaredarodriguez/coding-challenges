function KaprekarsConstant(num) {
  const KapCon = 6174;
  let count = 0;

  while (true) {
      count += 1;
      num = KapConReducer(num);
      if (num == KapCon) {
          return count;
      }
  }
}

function KapConReducer(num) {
  if (num.toString().length < 4) {
      num = parseInt(num.toString() + "0")
  } 


  let numArr = num.toString().split('') // change num to a workable array
  let ascendingNumArr = numArr.sort();
  let descendingNumArr = ascendingNumArr.slice(0).reverse();
  let ascendingNum = parseInt(ascendingNumArr.join(""), 10);
  let descendingNum = parseInt(descendingNumArr.join(""), 10);
    
  return descendingNum - ascendingNum;

}

console.log(KaprekarsConstant(6174)); // => 1
console.log(KaprekarsConstant(3524)); // => 3
console.log(KaprekarsConstant(2111)); // => 5
console.log(KaprekarsConstant(9831)); // => 7

