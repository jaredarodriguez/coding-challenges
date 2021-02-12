/*

Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

*/

function confirmEnding(str, target) {
    return (str.substr(-target.length) == target) ? true : false 
    }