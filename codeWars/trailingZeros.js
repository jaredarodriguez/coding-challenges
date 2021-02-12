/* Count the number of trailing zeros */
function zeros (n) {
    let divider = 1
    let sum = 0 
    
    while (divider <= n){
        sum = Math.floor(sum + n/(divider *= 5))
    }
    return sum
} 
