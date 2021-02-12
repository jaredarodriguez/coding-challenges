
/* 

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/ 

function convertHTML(str){
    let strArr = str.split(''); 
    let new_str = strArr.map((v, i, a) => {
        if (v == "&"){
            return v = "&amp;"
        } else if (v == "<"){
            return v = "&lt;"
        } else if (v == ">"){
            return v = "&gt;"
        } else if (v == "'"){
            return v = "&apos;"
        } else if (v == "\""){
            return v = "&quot;"
        } else {
            return v
        }
    })
    return new_str.join('') 
}


// TESTS 
console.log(convertHTML("Dolce & Gabbana")) // ==> Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // ==> Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")) // ==> Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')) // ==> Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")) // ==> Schindler&apos;s List.
console.log(convertHTML("<>")) // ==> &lt;&gt;.
console.log(convertHTML('abc')) // ==> abc.