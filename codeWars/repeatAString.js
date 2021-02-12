/*  Repeat a String Repeat a String
    Repeat a given string str (first argument) for num times (second argument). 
    Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    let newArray = [];
  
    if (num <= 0){
      return "";
    } else {
      for (let i = 0; i < num; i++){
      newArray.push(str)  
    }
    return newArray.toString().replace(/,/g, '') }
  }