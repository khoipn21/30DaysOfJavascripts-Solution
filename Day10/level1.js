const numSet = new Set();
const demoArr = ["a", "b", "c", "d", "r"];
for (let i = 0; i < 11; i++) numSet.add(i);
numSet.delete(5);
numSet.clear();
const charSet = new Set(demoArr);
const countries = new Map()
countries.set("Vietnam", "Vietnam".length);
countries.set("China", "China".length);
countries.set("USA", "USA".length);
console.log(countries)