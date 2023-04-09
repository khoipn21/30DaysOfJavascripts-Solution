function ranID(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(ranID(10));

function ranHex(length) {
  var result = "#";
  var characters = "abcdef0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(ranHex(6));

console.log(
  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`
);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

const countriesUpper = [];
const countriesLen = [];
countries.forEach(function (value) {
  countriesUpper.push(value.toUpperCase());
  countriesLen.push(value.length);
});
const finalCounList = [];
for (let i = 0; i < countries.length; i++) {
  var combine = [];
  combine.push(countries[i], countriesUpper[i].slice(0, 3), countriesLen[i]);
  finalCounList.push(combine);
}
console.log(finalCounList);

const landCoun = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) landCoun.push(countries[i]);
}
console.log(landCoun);

const endCoun = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].slice(countriesLen[i] - 2, countriesLen[i]) == "ia")
    endCoun.push(countries[i]);
}
console.log(endCoun);

let maxIndex = countriesLen.indexOf(Math.max.apply(null, countriesLen));
console.log(countries[maxIndex]);

const fivechar = [];
countries.forEach(function (value) {
  if (value.length == 5) fivechar.push(value);
});
console.log(fivechar);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let longestWeb = webTechs.reduce((a, c) => (a.length >= c.length ? a : c), "");
console.log(longestWeb);

const webList = [];
for (let i = 0; i < webTechs.length; i++) {
  var combine = [];
  combine.push(webTechs[i], webTechs[i].length);
  webList.push(combine);
}
console.log(webList);

for (const tech of webTechs) console.log(tech);

const fruits = ["banana", "orange", "mango", "lemon"];
const tempFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) tempFruits.push(fruits[i]);
console.log(tempFruits);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

let flatFullstack = fullStack.flat();
console.log(flatFullstack);
for (let i = 0; i < flatFullstack.length; i++) console.log(flatFullstack[i]);
