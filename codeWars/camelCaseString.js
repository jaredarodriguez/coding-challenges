/* Convert String to Camel Case

Complete the method/function so that it converts dash/underscore
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).*/

function toCamelCase(str){
    let strArray; 

    if (str === ""){
        return ""; 
    }
    if (str.indexOf("-") !== -1){
        strArray = str.split("-")
    } else {
        strArray = str.split("_")
    }
    let newString = strArray[0]; 

    for (let i = 1; i < strArray.length; i++){
        newString += capitalize(strArray[i]); 
    }
    return newString; 
}

let capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1); 
}
