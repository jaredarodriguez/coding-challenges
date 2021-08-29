const arr = [4, 3, 2, 1];
let newStrArr = '';

const thing = () => {
  for (let i = 0; i < arr.length; i++) {
    newStrArr += arr[i];
  }
  return newStrArr;
};

const newNum = parseInt(thing()) + 1;

const newString = newNum.toString();

const result = [];

for (char of newString) {
  const num = parseInt(char);
  result.push(num);
}

console.log(result);
