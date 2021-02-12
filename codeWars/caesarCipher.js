/*  Ceasar Cipher
Write a function that takes in a str and a num and returns the str with the 
characters shifted num times to the next character in the alphabet. The function
should account for lowercased and uppercased characters as well as characters
that are not included in the alphabet such as special characers like !@#$% or numbers. 
*/

function ceasarCipher(str, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"; 
  let workingStr = str.toLowerCase(); 
  let workingStrArr = workingStr.split(''); 
  let newWord = [];

  for (let i = 0; i < workingStrArr.length; i++){
      if (alphabet.includes(workingStrArr[i])) {
          let oldIdx = alphabet.indexOf(workingStr[i]);
          let newIdx = oldIdx + num; 
          let newChar = alphabet[newIdx % alphabet.length];
          newWord.push(newChar);
      } else {
          newWord.push(workingStr[i]);
      }
  }
 return newWord.join("");
}

// console.log(ceasarCipher("abcdef", 1)); 
// console.log(ceasarCipher("yellow", 0)); 
// console.log(ceasarCipher("stephen", 1)); 
// console.log(ceasarCipher("zulu", 6)); 
// console.log(ceasarCipher("october", 10));
// console.log(ceasarCipher("abc7def", 1));
// console.log(ceasarCipher("ABC390dEf", 1)); // 
// console.log("/////////////////////////////////////////");