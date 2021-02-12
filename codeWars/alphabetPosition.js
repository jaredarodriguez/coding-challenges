/* 

In this kata you are required to, given a string, replace every 
letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't 
return it.

"a" = 1, "b" = 2, etc.

*/

function alphabetPosition(text) {
    const regex = RegExp(/[a-z]/);
    const textLC= text.toLowerCase();
    let newSentence = [];
    for (let i = 0; i < textLC.length; i++){
        if (regex.test(textLC[i])){
            newSentence.push((textLC[i]));
        }
    }
    let letters = newSentence.join('');
    let charCodeWord = []
    for (let i = 0; i < letters.length; i++) {
        charCodeWord.push(letters.charCodeAt(i) - 96);
    }
    console.log(charCodeWord.join(' '))
}

alphabetPosition("The sunset sets at twelve o' clock.")