function time(num) {
const hours = (num / 60);
const roundHours = Math.floor(hours);
const minutes = (hours - roundHours) * 60;
const roundMinutes = Math.round(minutes);
if(num > 119 && roundMinutes === 1) {
   return num =  roundHours + " hours, " + roundMinutes + " minute.";
} else if(num > 119 && roundMinutes !== 1) {
    return num = roundHours + " hours, " + roundMinutes + " minutes.";
} else if(num < 119 && roundMinutes === 1) {
    return num =  roundHours + " hour, " + roundMinutes + " minute.";
} else {
    return num =  roundHours + " hour, " + roundMinutes + " minutes.";
}
}
console.log(time(242));