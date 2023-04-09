solveLinEquation(2, 3, 5, 5);
solveQuadEquation();
showDateTime();
evensAndOdds(100);
console.log(sumAllNums(1, 2, 3, 4));
randomHexaNumberGenerator();
userIdGenerator();
function solveLinEquation(a, b, c, x) {
  console.log("Form ax+by+c=0");
  console.log((-1 * (a * x + c)) / b);
}

function solveQuadEquation(a, b, c) {
  let root1, root2;
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`{${root1}, ${root2}}`);
  } else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`{${root1}}`);
  } else if (discriminant < 0) {
    console.log("No roots");
  } else console.log(0);
}

function printArray(array) {
  for (let i = 0; i < array.length; i++) console.log(array[i]);
}

function showDateTime() {
  let date = new Date();
  let datee = date.getDate();
  let month = date.getUTCMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  console.log(`${datee}/${month + 1}/${year} ${hour}:${minutes}`);
}

function swapValues(x, y) {
  let t = x;
  x = y;
  y = t;
}

function reverseArray(a) {
  const tempArr = [];
  for (let i = a.length - 1; i >= 0; i--) {
    tempArr.push(a[i]);
  }
  return tempArr;
}

function capitalizedArray(a) {
  const tempArr = [];
  for (let i = 0; i < a.length; i++) {
    tempArr.push(a[i].toUpperCase());
  }
}

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

function sumOfOdds(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) if (i % 2 != 0) sum += i;
  return sum;
}

function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) if (i % 2 == 0) sum += i;
  return sum;
}

function evensAndOdds(n) {
  let countEven = 0,
    countOdds = 0;
  for (let i = 1; i <= n; i++)
    if (i % 2 == 0) countEven++;
    else countOdds++;
  console.log(`The number of odds are ${countOdds}.`);
  console.log(`The number of evens are ${countEven}`);
}

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function randomHexaNumberGenerator() {
  var result = "#";
  var characters = "abcdef0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
}

function userIdGenerator() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
}
