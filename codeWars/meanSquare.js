var solution = function (firstArray, secondArray) {
  let total_sum = 0;
  let divisor = firstArray.length;
  if (firstArray.length != secondArray.length) {
    return;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      total_sum += Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2);
    }
  }
  return total_sum / divisor;
};

console.log(solution([1,2,3],[4,5,6]))