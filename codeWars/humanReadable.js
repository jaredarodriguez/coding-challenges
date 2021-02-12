  /* 
  Write a function that takes a non-negative integer (seconds)
  and returns the time in human-readable format 

  HH = hours, padded to 2 digits, range 00-99 
  MM = minutes, padded to 2 digits, range 00-59
  SS = seconds, padded to 2 digits, range 00-59

  */ 

 function humanReadable(seconds){
    let sec = 0; 
    let min = 0; 
    let hour = 0; 

    sec = seconds % 60;
    min = Math.floor(seconds / 60) % 60; 
    hour = Math.floor(seconds / 3600);

    return padNum(hour) + ":" + padNum(minute) + ":" + padNum(sec); 
    
} 

let padNum = (num) => {
  if (num < 10){
      return "0" + num
  }
  return String(num) 
}