/*Convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character 
is a duplicate. */

function duplicateEncode(word){
    let wordObj = {}
    word.toLowerCase().split('').forEach(function(letter){
        if(wordObj.hasOwnProperty[letter]){
            wordObj[letter]++;
        } else {
            wordObj[letter] = 1
        }
    });
    word = word.toLowerCase().split('').map(function(letter){
        if (wordObj[letter] > 1) {
            return ')'; 
        } else {
            return '(';
        }
    }).join(''); 
    return word; 
}

