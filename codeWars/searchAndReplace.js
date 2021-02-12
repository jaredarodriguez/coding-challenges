/* 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as 
"Dog"
*/

function myReplace (str, before, after){
    let strArr = str.split(" ")
    let answerArr = [];
    
    for (let i = 0; i < strArr.length; i++){
        if (strArr[i] == before && strArr[i][0] == strArr[i][0].toUpperCase()){
            answerArr.push(strArr[i] = after.slice(0, 1).toUpperCase() + after.slice(1)) 
        } else if (strArr[i] == before) {
            answerArr.push(strArr[i] = after); 
        }
        else {
            answerArr.push(strArr[i])
        }
    }
    return answerArr.join(' ')
}

// ((word.slice(0, 1).toUpperCase()) + (word.slice(1)))
// TESTS 

console.log(myReplace("Let us go to the store", "store", "mall")) // ==> "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // ==> "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) // ==> "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")) // ==> "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) // ==> "Let us get back to more Algorithms".