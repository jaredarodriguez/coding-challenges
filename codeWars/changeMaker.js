/*

write a fn that will help a vending machine return the most efficient change in coins possible when given a sales price and a payment

pennies: 0.01
nickels: 0.05
dimes: 0.1
quarters: 0.25

return input arr of: 
[0] # of pennies
[1] # of nickels
[2] # of dimes
[3] # of quarters

*/

function ChangeMaker(price, payment) {
  let price = price * 100
  let payment = payment * 100
  let changeArr = [0, 0, 0, 0]
  let change = payment - price

  let pennie = 1
  let nickel = 5
  let dime = 10
  let quarter = 25

  function makeChange(num) {
    let remainder = num
    while (remainder > pennie) {
      if (remainder > quarter) {
        changeArr[3] = Math.floor(num / quarter)
        remainder = remainder % quarter
      } else if (remainder > dime) {
        changeArr[2] = Math.floor(remainder / dime)
        remainder = remainder % dime
      } else if (remainder > nickel) {
        changeArr[1] = Math.floor(remainder / nickel)
        remainder = remainder % nickel
      } else {
        changeArr[0] = remainder
        remainder = 0
      }
    }
  }

  if (change < 0) {
    makeChange(payment)
  }
  makeChange(change)

  return changeArr
}
