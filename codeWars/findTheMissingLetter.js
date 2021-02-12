/* Write a method that takes an array of consecutive (increasing) 
letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly 
one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
*/

function findMissingLetter(array) {
    let stringArr = array.toString().replace(/,/g, '')
    let missingLetter = stringArr.charCodeAt(stringArr[0]);

    for (let i = 0; i < stringArr.length; i++) {
    let currentLetterValue = stringArr[i].charCodeAt(stringArr[i])
        if (currentLetterValue === missingLetter){
            missingLetter++
        } else {
            currentLetterValue = missingLetter;
        }
    }
    return String.fromCharCode(missingLetter)
}

console.log(findMissingLetter(["a","b","c","d","f"])) // => "e"
console.log(findMissingLetter(["O","Q","R","S"])) // => "P"