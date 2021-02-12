//Reverse a string 

function reverseString(str) {
    return Array.from(str).reverse().join('')
 }
 
 function reverseString(str){
     let strArr = str.split(''); 
     let answer = ""; 
     for (let i = strArr.length - 1; i >= 0; i--){
         answer += strArr[i] 
     }
     return answer; 
 }
 
 function reverseString(str){
     return str.split(' ').sort(function(a, b){b.length - a.length})[0].length
 }
 