let base = Number(prompt("Enter base of the triangle"));
let height = Number(prompt("Enter height of the triangle"));
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

let a = Number(prompt("Enter side a"));
let b = Number(prompt("Enter side b"));
let c = Number(prompt("Enter side c"));
let perimeter = a + b + c;
console.log(`The perimeter of the triangle is ${perimeter}`);

let len = Number(prompt("Enter length of the rectangle"));
let width = Number(prompt("Enter width of the rectangle"));
let area2 = len * width;
console.log(`The area of the rectangle is ${area2}`);
let perimeter2 = 2 * (len + width);
console.log(`The perimeter of the rectangle is ${perimeter2}`);

const PI = 3.14;
let radius = Number(prompt("Enter the radius"));
let areaCircle = 2 * PI * radius;
console.log(`The area of the circle is ${areaCircle.toFixed(2)}`);

let fomula1 = "y=2x-2";
let slope = Number(fomula1.match(/-?\d+/g)[0]);
console.log(`Slope = ${slope}`);
let lent = fomula1.match(/-?\d+/g).length - 1;
let xInter =
  (-1 * Number(fomula1.match(/-?\d+/g)[lent])) /
  Number(fomula1.match(/-?\d+/g)[0]);
let yInter = Number(fomula1.match(/-?\d+/g)[lent]);
console.log(`x-intercept = (${xInter},0)`);
console.log(`y-intercept = (0,${yInter})`);

let point1 = "(2,2)";
let point2 = "(6,10)";
let point1len = point1.match(/-?\d+/g).length;
let numerator =
  point1.match(/-?\d+/g)[point1len - 1] - point1.match(/-?\d+/g)[0];
let point2len = point2.match(/-?\d+/g).length;
let denominator =
  point2.match(/-?\d+/g)[point2len - 1] - point2.match(/-?\d+/g)[0];
let m = numerator / denominator;
console.log(`Slope = ${m}`);

slope > m
  ? console.log(`Slope 1 = ${slope} > slope 2 = ${m}`)
  : console.log(`Slope 1 = ${slope} < slope 2 = ${m}`);

let x = Math.floor(Math.random() * 6 - 3);
let y = x ** 2 + 6 * x + 9;
console.log(`x=${x}`);
console.log(`y=${y.toFixed(2)}`);

let hours = prompt("Enter hours");
let ratePerHour = prompt("Enter rate");
console.log(`Your weekly earning is: ${hours * ratePerHour}`);

let myName = "Khoi";
myName.length > 7
  ? console.log("My name is long")
  : console.log("My name is short");

let myFamilyName = "Pham";

myName.length > myFamilyName.length
  ? console.log(
      `My first name, ${myName} is longer than my family name, ${myFamilyName}`
    )
  : myName.length < myFamilyName.length
  ? console.log(
      `My first name, ${myName} is shorter than my family name, ${myFamilyName}`
    )
  : console.log(
      `My first name, ${myName} is as long as than my family name, ${myFamilyName}`
    );

let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

let today = new Date();
let year = today.getFullYear();
let birthYear = prompt("Enter your birth year");
year - birthYear >= 18
  ? console.log(`You are ${year - birthYear}. You are old enough to drive`)
  : console.log(
      `You are ${year - birthYear}. You will be allowed to drive after ${
        18 - (year - birthYear)
      } years.`
    );

let lifeSpan = prompt("Enter number of years you live");
let lifeSec = 60 * 60 * 24 * 365 * lifeSpan;
console.log(`You lived ${lifeSec} seconds.`);
