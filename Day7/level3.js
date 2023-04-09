let numberOfId = 6;
let lengthOfId = 6;
const sampleArr = [2, 3, 6, 5, 8, 6];
let sampleStr = "a";
userIdGeneratedByUser();
//rgbColorGenerator();
console.log(arrayOfHexaColors());
arrayOfRgbColors();
console.log(convertHexaToRgb("#21fc40"));
console.log(convertRgbToHexa("rgb(33,252,64)"));
console.log(generateColors("hex", 3));
console.log(shuffleArray(sampleArr));
console.log(factorial(5));
console.log(isEmpty(sampleArr));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sumOfArrayItems(sampleArr));
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(isPrime(8));
console.log(
  uniqueArr(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  sameType(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(isValidVariable("abc"));
sevenRandomNumbers();
console.log(reverseCountries());

function userIdGeneratedByUser() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < numberOfId; i++) {
    result = "";
    for (let j = 0; j < lengthOfId; j++)
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    console.log(result);
  }
}

function rgbColorGenerator() {
  var r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function arrayOfHexaColors() {
  let characters = "0123456789abcdef";
  const hex = Array();
  for (let i = 0; i < 1; i++) {
    hex[i] = "#";
    for (let j = 0; j < 6; j++) {
      hex[i] += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
  }
  return hex;
}

function arrayOfRgbColors() {
  //var r, g, b;
  const rgb = Array();
  for (let i = 0; i < 2; i++) {
    rgb.push(rgbColorGenerator());
  }
  console.log(rgb);
}
function hexToDec(hex) {
  return parseInt(hex, 16);
}

function convertHexaToRgb(hex) {
  let tempHex = hex.substr(1, hex.length - 1);
  let convRgb = "";
  convRgb =
    hexToDec(tempHex.slice(0, 2)) +
    "," +
    hexToDec(tempHex.slice(2, 4)) +
    "," +
    hexToDec(tempHex.slice(4, tempHex.length));
  return `rgb(${convRgb})`;
}

function convertRgbToHexa(dec) {
  let tempDec = dec.substring(4, dec.length - 1);
  let convHex = "#";
  let tempA = tempDec.split(",");
  for (let i = 0; i < tempA.length; i++) {
    convHex += Number(tempA[i]).toString(16);
  }
  return convHex;
}

function generateColors(type, quantity) {
  const result = Array();
  if (type == "hex") {
    for (let i = 0; i < quantity; i++)
      result.push(arrayOfHexaColors().toString());
    return result;
  } else if (type == "rgb") {
    for (let i = 0; i < quantity; i++) result.push(rgbColorGenerator());
    return result;
  } else return "Invalid type";
}

function shuffleArray(a) {
  a.sort(function () {
    return Math.random() - 0.5;
  });
  return a;
}

function factorial(num) {
  if (num == 1) return num;
  else return num * factorial(num - 1);
}

function isEmpty(parameter) {
  if (parameter.length == 0) return true;
  else return false;
}

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sumOfArrayItems(Arr) {
  let sum = 0;
  if (Arr.some((value) => typeof value != "number"))
    return "Invalid array item(s).";
  else {
    Arr.forEach((value) => (sum += value));
    return sum;
  }
}

function modifyArray(Arr) {
  if (Arr.length < 5) return "Item not found";
  else {
    let temp = Arr[4];
    Arr.splice(4, 1, temp.toUpperCase());
    return Arr;
  }
}

function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) if (num % i === 0) return false;
  return true;
}

function uniqueArr(Arr) {
  let n = Arr.length;
  let s = new Set();
  for (let i = 0; i < n; i++) {
    s.add(Arr[i]);
  }
  return s.size == Arr.length;
}

function sameType(Arr) {
  return new Set(Arr.map((x) => typeof x)).size == 1;
}

function isValidVariable(variable) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_";
  let temp = variable.split("");
  for (i = 0; i < temp.length; i++)
    if (characters.search(temp[i]) == -1) return false;
  return true;
}

function sevenRandomNumbers() {
  const arr = [];
  while (arr.length < 7) {
    let r = Math.floor(Math.random() * 10);
    if (arr.indexOf(r) == -1) arr.push(r);
  }
  console.log(arr);
}

function reverseCountries() {
  let countries = ["Nigeria", "U.S.A", "Italy", "Canada", "Lebanon"];
  return countries.reverse();
}
