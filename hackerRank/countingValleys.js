/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
*/

function countingValleys(steps, path) {
  let strSplit = path.split('')
  let prevLevel = 0
  let currLevel = 0
  let numOfValleys = 0

  strSplit.forEach((steps) => {
    prevLevel = currLevel
    if (steps === 'D') {
      currLevel -= 1
    } else {
      currLevel += 1
    }
    if (prevLevel === 0 && currLevel === -1) {
      numOfValleys += 1
    }
  })
  return numOfValleys
}

console.log(countingValleys('DDUUUUDD'))
