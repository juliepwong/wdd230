const date = new Date();
document.getElementById("date").innerHTML = date;

const meeting = new Date();
const day2 = meeting.getDay();
// Sunday - Saturday : 0 - 6

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

console.log(day2);
// Day: Tuesday
