 /* Challenge: First Non-Repeating Character
 Write a function named NonRepeatingCharacter that takes a string input, 
 and returns the first character that is not repeated anywhere in the string. 

For example, if given the input 'stress', the function should return 't', since 
the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but 
the function should return the correct case for the initial letter. For example, the input 'sTreSS' 
should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or 
None -- see sample tests.
*/
 
function firstNonRepeatingLetter(string) {
    let arr = string.split('');
    let result = ''; 
    let ctr = 0;
    
    for (let x = 0; x < arr.length; x++){
        let ctr = 0; 
      for (let y = 0; y < arr.length; y++) {
        if (arr[x] === arr[y]){
            ctr+= 1;      
        }
      }
     if (ctr < 2) {
       result = arr[x];
       break; 
     } 
    }
    
    return result; 
}

