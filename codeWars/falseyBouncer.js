/* Falsey Bouncer 

Remove all falsey values from the array 

*/

function bouncer(arr) {
    const newArray = []; 
    for (let i = 0; i < arr.length; i++){
      if (!!arr[i] == true){
        newArray.push(arr[i])
      }
    }
    return newArray 
  }