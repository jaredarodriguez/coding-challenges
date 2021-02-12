/* 

Your job is to write a function which increments a string, to 
create a new string.

If the string already ends with a number, the number should be 
incremented by 1.

If the string does not end with a number. the number 1 should 
be appended to the new string.

*/

function incrementString(strng) {
    let regex = new RegExp("^[0-9]+$"); 
    let numberArr = [];
    let wordArr = [];

    for (let i = 0; i < strng.length; i++) {
        if (regex.test(strng[i])){
            numberArr.push(strng[i]) 
        } else if (!regex.test(strng[i])){
            wordArr.push(strng[i]);
        }
    }

    let compareNum = parseInt(numberArr.join('')) + 1;
    let compareNumLength = compareNum.toString().length; 
    let start = numberArr.length - compareNumLength; 
    let end = numberArr.length - start; 

    if (numberArr.length === 0) {
        return (wordArr.join() + '1').replace(/,/g, '');
    }
    else if (compareNumLength >= numberArr.length) {
        return wordArr.join('') + compareNum.toString();
    } else {
        numberArr.splice(start, end, compareNum);
        return (wordArr.join('') + numberArr).replace(/,/g, '')
    }

}

console.log(incrementString("foobar000")) // ==> "foobar001"
console.log(incrementString("foo")) // ==> "foo1"
console.log(incrementString("foobar001")) // ==> "foobar002")
console.log(incrementString("foobar99")) // ==>, "foobar100")
console.log(incrementString("foobar099")) // ==> "foobar100")
console.log(incrementString("")) // ==> "1"
