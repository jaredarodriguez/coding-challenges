//Return the longest word 

//Brute force solution 
function longestWord(x){
    let words = x.split(' '); 
    let longestWord = ""; 
    for (i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i]

        }
    }
    return longestWord; 
}

//One liner solution 

function longestWord(x){
    return x.split(' ').sort(function(a, b){return b.length - a.length})[0]
}
