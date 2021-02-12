/*  Title Case
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words 
like "the" and "of".
*/

function titleCase(str){
    const convertToArray = str.toLowerCase().split(' '); 
    const result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    return result.join(' ');    
}