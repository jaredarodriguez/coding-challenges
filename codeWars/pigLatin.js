/* 

Move the first letter of each word to the end of it, then add 
"ay" to the end of the word. Leave punctuation marks untouched.

*/

function pigIt(str) {
  let strArr = str.split(' ');
  let regEx = new RegExp(/^[A-Z]+$/i)
  let alpha = [];
  let nonAlpha = [];

strArr.forEach((x) => {
    if (regEx.test(x)) {
        let end = x[0]
        let start = x.substring(1)
        alpha.push(start + end + 'ay')
    }
    else if (!regEx.test(x)) {
        nonAlpha.push(' ' + x);
    }
})

return alpha.join(' ') + nonAlpha.join(' ');
  
}

pigIt('Pig latin is cool'); 
pigIt('Hello world !');