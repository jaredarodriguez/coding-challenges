/* 
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
*/

c = [0, 1, 0, 0, 0, 1, 0] // ==> 3

function jumpingOnTheClouds(arr) {
  let count = 0
  let cloudCount = 0
  for (let i = count; i < arr.length; i++) {
    if (arr[count + 2] === 0) {
      count += 2
      cloudCount += 1
    } else if (arr[count + 1] === 0) {
      count += 1
      cloudCount += 1
    }
  }
  return cloudCount
}

console.log(jumpingOnTheClouds(c))
