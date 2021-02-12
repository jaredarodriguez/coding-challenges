/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, 
in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed 
as a combination of years, days, hours, minutes and seconds.
*/

function formatDuration(seconds) {
    if (seconds == 0){
        return "now";
    }

    let yearCount = Math.floor(seconds / 31536000);
    let remainder = seconds % 31536000; 
    let dayCount = Math.floor(remainder / 86400); 
    remainder = seconds % 86400; 
    let hourCount = Math.floor(remainder / 3600)
    remainder = seconds % 3600
    let minuteCount = Math.floor(remainder / 60)
    remainder = seconds % 60
    let secondCount = remainder; 

    let message = []; 

    if (yearCount > 1){
        years = `${yearCount} years`
        message.push(years)
    } else if(yearCount === 1){
        years = `${yearCount} year`
        message.push(years)
    }
    if (dayCount > 1){
        days = `${dayCount} days`
        message.push(days)
    } else if(dayCount === 1){
        days = `${dayCount} day`
        message.push(days)
    }
    if (hourCount > 1){
        hours = `${hourCount} hours`
        message.push(hours)
    } else if(hourCount === 1){
        hours = `${hourCount} hour`
        message.push(hours)
    }
    if (minuteCount > 1){
        minutes = `${minuteCount} minutes`
        message.push(minutes)
    } else if(minuteCount === 1){
        minutes = `${minuteCount} minute`
        message.push(minutes)
    } if (secondCount > 1){
        seconds = `${secondCount} seconds`
        message.push(seconds)
    } else if(secondCount === 1){
        seconds = `${secondCount} second`
        message.push(seconds)
    }

    return message.join(" ");
   
}
console.log(formatDuration(1892160348))