let i;
for (i = 0; i <= 10; i++) console.log(i);

i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 10);

let str = "";
for (i = 1; i <= 7; i++) {
  str += "#";
  console.log(str);
}

for (i = 0; i < 11; i++) console.log(`${i} x ${i} = ${i ** 2}`);

console.log(`i      i^2     i^3`);
for (i = 0; i < 11; i++) console.log(`${i}      ${i ** 2}     ${i ** 3}`);

for (i = 0; i < 101; i++) if (i % 2 == 0) console.log(i);

for (i = 0; i < 101; i++) if (i % 2 != 0) console.log(i);

let sum = 0;
for (i = 0; i < 101; i++) sum += i;
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

let evenSum = 0,
  oddSum = 0;
for (i = 0; i < 101; i++) {
  if (i % 2 == 0) evenSum += i;
  if (i % 2 != 0) oddSum += i;
}

console.log(
  `The sum of all even numbers from 0 to 100 is ${evenSum}. And the sum of all odd numbers from 0 to 100 is ${oddSum}`);

let totalSum = [0, 0];
for (i = 0; i < 101; i++) {
  if (i % 2 == 0) totalSum[0] += i;
  if (i % 2 != 0) totalSum[1] += i;
  console.log(totalSum);
}

for (i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 101));
}

i = 0;
const numRan = Array();
while (i < 5) {
  var r = Math.floor(Math.random() * 101);
  if (numRan.indexOf(r) == -1) numRan.push(r);
  i++;
}
console.log(numRan);

let result = "";
let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let charactersLength = characters.length;
for (i = 0; i < 6; i++) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(result);
