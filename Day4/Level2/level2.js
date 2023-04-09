let score = 2;
switch (true) {
  case score >= 80:
    console.log("A");
    break;
  case score >= 70 && score < 80:
    console.log("B");
    break;
  case score >= 60 && score < 70:
    console.log("C");
    break;
  case score >= 50 && score < 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

const autumn = ["September", "October", "November"];
const winter = ["December", "January", "February"];
const spring = ["March", "April", "May"];
const summer = ["June", "July", "August"];
let month = prompt("Enter month (text)");
if (autumn.indexOf(month) != -1) console.log("Autumn");
else if (winter.indexOf(month) != -1) console.log("Winter");
else if (spring.indexOf(month) != -1) console.log("Spring");
else console.log("Summers");

let today = prompt("Enter weekday");
var regExp = new RegExp(today, "i");
let index;
const workingDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekend = ["Saturday", "Sunday"];

if (weekend.findIndex((value) => regExp.test(value)) != -1) {
  index = weekend.findIndex((value) => regExp.test(value));
  console.log(`${weekend[index]} is weekend`);
} else {
  index = workingDay.findIndex((value) => regExp.test(value));
  console.log(`${workingDay[index]} is working day`);
}
