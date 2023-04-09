let firstName = "Khoi";
let lastName = "Pham";
let country = "Vietnam";
let city = "HCM";
let age = 19;
let isMarried = false;
let year = 2020;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" == typeof 10);

console.log(parseFloat("9.8") == 10);

console.log(10 == 15 - 5);
console.log(25 > 10);
console.log(1 > 0.1);
console.log(5 > 10);
console.log(3 < 1);
console.log(1 > 2);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length != "jargon".length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(4 === "4");
console.log("python".search("on") == -1 && "dragon".search("on") == -1);

let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay() + 1);
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());
