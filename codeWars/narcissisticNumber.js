 /* Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
*/

function narcissistic(value){
    arrayFromValue = Array.from(String(value), Number);
    base = arrayFromValue.length; 
    result = 0; 

    for (let i = 0; i < arrayFromValue.length; i++){
        result += Math.pow(arrayFromValue[i], base)
    }

    if (result === value){
     return true; 
    }
    else {
     return false; 
    
    }

}