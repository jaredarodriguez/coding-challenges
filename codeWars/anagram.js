/*
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lowercase
*/

function anagrams(stringA, stringB) {
    if (sortString(stringA) === sortString(stringB)) {
        return true;
    }
    return false;
}

function sortString(text) {
    return text.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
}  

anagrams('rail safety', 'fairy tales') // => 
anagrams('RAIL! SAFETY!', 'fairy tales') // =>
anagrams('Hi there', 'Bye there') // => 
