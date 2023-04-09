let today = new Date();
let hour = today.getHours(),
  min = today.getMinutes(),
  month = today.getMonth() + 1,
  day = today.getDay() + 1;
month < 10 ? (month = "0" + month) : (month = month + "");
day < 10 ? (day = "0" + day) : (day = day + "");
hour < 10 ? (hour = "0" + hour) : (hour = hour + "");
min < 10 ? (min = "0" + min) : (min = min + "");
let YYYYMMDD = `${today.getFullYear()}-${month}-${day}`;
let DDMMYYYY = `${day}-${month}-${today.getFullYear()}`;
let DdMmYYYy = `${day}/${month}/${today.getFullYear()}`;
console.log(`${YYYYMMDD} ${hour} : ${min}`);
console.log(`${DDMMYYYY} ${hour} : ${min}`);
console.log(`${DdMmYYYy} ${hour} : ${min}`);