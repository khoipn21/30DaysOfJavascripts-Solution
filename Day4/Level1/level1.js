let ages = prompt("Enter your age");
if (ages >= 18) console.log("You are old enough to drive");
else console.log(`You are left with ${18 - ages} years to drive.`);

let myAge = 19;
let yourAge = prompt("Enter your age");
if (yourAge > myAge)
  console.log(`You are ${yourAge - myAge} years older than me.`);
else console.log(`I am ${myAge - yourAge} years older than you.`);

let a = 4,
  b = 3;
if (a > b) console.log(`${a} is greater than ${b}`);
else console.log(`${a} is less than ${b}`);

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

let num = prompt("Enter a number");
if (num % 2 == 0) console.log(`${num} is an even number`);
else console.log(`${num} is an odd number`);
