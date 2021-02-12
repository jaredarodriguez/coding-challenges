/* 

Given a  time in 12-hour AM/PM format, convert it to military (24-hour) time. Note: 12:00:00 AM on a 12-hour clock is 00:00:00 on a 24-hour clcok. 

Complete the timeConversion function to return a new string representing the input time in 24 hour format

Sample Input ('07:05:45PM') 
Output --> '19:05:45'
*/

function timeConversion(s) {
  let sArr = s.split(':')
  let result = []
  let hour = parseFloat(sArr[0])
  let minute = sArr[1]
  let second = sArr[2].slice(0, 2)
  let amPM = sArr[2].slice(sArr[2].length - 2)
  if (hour === 12 && amPM === 'AM') {
    let hour = '00'
    result.push(`${hour}:${minute}:${second}`)
  } else if (hour < 12 && amPM === 'AM') {
    result.push(`0${hour}:${minute}:${second}`)
  } else if (amPM === 'PM' && hour !== 12) {
    result.push(`${hour + 12}:${minute}:${second}`)
  } else {
    result.push(`${hour}:${minute}:${second}`)
  }
  return result.join('')
}

console.log(timeConversion('01:00:00AM'))
