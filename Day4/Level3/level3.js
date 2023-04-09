let currentMonth = "February";
let today = new Date();
let index;
var regExp = new RegExp(currentMonth, "i");
const month31Days = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];
let leap;
if (today.getFullYear() % 4 == 0) leap = 29;
else leap = 28;
const month30Days = ["April", "June", "September", "November"];
let month28Days = "February";
if (month31Days.findIndex((value) => regExp.test(value)) != -1) {
    index = month31Days.findIndex((value) => regExp.test(value));
    console.log(`${month31Days[index]} has 31 days`);
}
else
    if (month30Days.findIndex((value) => regExp.test(value)) != -1) {
        index = month30Days.findIndex((value) => regExp.test(value));
        console.log(`${month30Days[index]} has 30 days`);
    }
    else console.log(`${month28Days} has ${leap} days`);
