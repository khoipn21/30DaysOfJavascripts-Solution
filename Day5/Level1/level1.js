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
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const emptyArray = Array();

const numArray = [1, 2, 3, 4, 5, 6];

console.log(
  numArray[0],
  numArray[Math.floor(numArray.length / 2)],
  numArray[numArray.length - 1]
);

const mixedDataTypes = [1, "2", true, "name", 8, false];
console.log(mixedDataTypes.length);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);

console.log(itCompanies.length);

console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

itCompanies.forEach(function (value) {
  console.log(value);
});

itCompanies.forEach(function (value) {
  console.log(value.toUpperCase());
});

let popArr = itCompanies.pop();
console.log(
  `${itCompanies
    .slice(0, itCompanies.length - 2)
    .join(", ")} and ${popArr} are big IT companies.`
);
let company = "facebook";
let regCom = new RegExp(company, "i");
if (itCompanies.findIndex((value) => regCom.test(value) != 1))
  console.log(
    itCompanies[itCompanies.findIndex((value) => regCom.test(value))]
  );
else console.log("Company not found");

let maxCount = 0;
let maxIndex = -1;
itCompanies.forEach(function (value, index) {
  if (value.match(/o/gi) == null) maxIndex += 0;
  else if (value.match(/o/gi).length > maxCount) {
    maxCount = value.match(/o/gi).length;
    maxIndex = index;
  }
  //console.log(`${maxIndex}: ${value}`)
});
console.log(itCompanies[maxIndex]);

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.reverse().slice(0, 3).reverse());

if (itCompanies.length % 2 == 0) {
  console.log(itCompanies[itCompanies.length / 2]);
  console.log(itCompanies[itCompanies.length / 2 - 1]);
} else console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

itCompanies.shift();
console.log(itCompanies);

if (itCompanies.length % 2 == 0) {
  itCompanies.splice(itCompanies.length / 2 - 1, 2);
  console.log(itCompanies);
} else {
  itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
  console.log(itCompanies);
}

itCompanies.pop();
console.log(itCompanies);

itCompanies.splice(0);
console.log(itCompanies);
