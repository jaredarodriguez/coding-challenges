/* Pig Wars 

Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. 
Leave punctuation marks untouched.

*/

function pigIt(st){
    let stArray = st.split(' ')
    let pigArr = [];
    let newWord = "";  
    for(let word in stArray){
        newWord = stArray[word].substring(1) + stArray[word].substring(0, 1) + "ay"; 
        pigArr.push(newWord); 
    }
    return pigArr.join(' ')
}
