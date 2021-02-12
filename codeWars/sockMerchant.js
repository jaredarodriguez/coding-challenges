/*John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with 
matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are 
three odd socks left, one of each color. The number of pairs is .

Function must return an integer representing the number of matching pairs of socks that are available.
*/

function sockMerchant(n, arr){
    let colors = {}; 
    let matches = 0; 
    for (let i = 0; i < n; i++){
        if (colors[arr[i]]) {
            matches++; 
            colors[arr[i]] = 0
        } else {
            colors[arr[i]] = 1
        }
    }
    return matches; 
}