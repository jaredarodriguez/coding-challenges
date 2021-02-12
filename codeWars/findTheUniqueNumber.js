/* There is an array with some numbers. All numbers are equal 
except for one. Try to find it!
 */

function findUniq(arr) {
    let unique; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 2] === undefined || arr[i+1] === undefined) {
            if (arr[i] !== arr[i-1] && arr[i] !== arr[i-2]) 
            arr[i] = unique; 
        } else if (arr[i] !== arr[i+1] && arr[i] !== arr[i+2]) {
            arr[i] = unique; 
        }
        }
        return unique; 
}

findUniq([ 1, 1, 1, 2, 1, 1 ]) // === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) // === 0.55
findUniq([ 3, 10, 3, 3, 3 ]) // === 10