/* 

Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

S is the start point of Sam's house, and t is the endpoint. 
Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])?

*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const determineCount = (arr, pos, s, t) => {
    let count = 0
    arr.forEach((el) => {
      if (el + pos >= s && el + pos <= t) {
        count += 1
      }
    })
    return count
  }
  let appleCount = determineCount(apples, a, s, t)
  let orangeCount = determineCount(oranges, b, s, t)
  console.log(`${appleCount}\n${orangeCount}`)
}
