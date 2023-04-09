const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//countries.forEach(value=>console.log(value))
//names.forEach(value=>console.log(value))
//numbers.forEach(value=>console.log(value))
const newCountries = countries.map((value) => value.toUpperCase());
const lengthCountries = countries.map((value) => value.length);
const squareNumber = numbers.map((value) => value ** 2);
const upperName = names.map((value) => value.toUpperCase());
const productPrice = products.map((value) => value.price);
const landFilter = countries.filter((value) =>
  value.toLowerCase().includes("land")
);
const contriesLengthFilter = countries.filter((value) => value.length >= 6);
const startFilter = countries.filter((value) => value.startsWith("E"));
const priceFilter = products.filter((value) => {
  if (Number.isInteger(value.price)) return value.price;
});
//console.log(priceFilter.map(value=>value.price));
function getStringLists(Arr) {
  const temp = [];
  Arr.forEach((value) => {
    temp.push(value.toString());
  });
  return temp;
}
let sum = numbers.reduce((a, b) => a + b);
let concateCountries =
  countries.reduce((a, b) => a.concat(",", b)) +
  " are north European countries";
//console.log(concateCountries)
console.log(names.some((value) => value.length > 7));
console.log(countries.every((value) => value.toLowerCase().includes("land")));
console.log(countries.find((value) => value.length == 6));
console.log(countries.findIndex((value) => value.length == 6));
console.log(countries.findIndex((value) => value == "Norway"));
console.log(countries.findIndex((value) => value == "Russia"));
