const PI = 3.14;
const GRAVITY = 9.8;
fullName("Khoi ", "Pham Ngoc");
console.log(addNumber(25, 99));
console.log(areaOfRectangle(10, 20));
console.log(perimeterOfRectangle(10, 20));
console.log(volumeOfRectPrism(10, 20, 30));
console.log(areaOfCircle(10));
console.log(circumOfCircle(10).toFixed(2));
console.log(density(20, 3).toFixed(2));
console.log(speed(20, 3).toFixed(2));
console.log(weight(20).toFixed(2));
BMIcheck(85, 1.7);
console.log(checkSeason("January"));
console.log(Math.max(1, 2, 3));

function fullName(firstName, lastName) {
  console.log(firstName + lastName);
}
function addNumber(a, b) {
  return a + b;
}
function areaOfRectangle(length, width) {
  return length * width;
}
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
function areaOfCircle(radius) {
  return PI * radius ** 2;
}
function circumOfCircle(radius) {
  return 2 * PI * radius;
}
function density(mass, volume) {
  return mass / volume;
}
function speed(distance, time) {
  return distance / time;
}
function weight(mass) {
  return mass * GRAVITY;
}
function BMIcheck(weight, height) {
  var BMI = weight / height ** 2;
  switch (true) {
    case BMI < 18.5:
      console.log("Underweight");
      break;
    case BMI >= 18.5 && BMI < 24.9:
      console.log("Normal weight");
      break;
    case BMI >= 25 && BMI < 29.9:
      console.log("Overweight");
      break;
    default:
      console.log("Obese");
      break;
  }
}
function checkSeason(month) {
  switch (month) {
    case "September":
    case "October":
    case "November":
      return "Autumn";
    case "December":
    case "January":
    case "February":
      return "Winter";
    case "March":
    case "April":
    case "May":
      return "Spring";
    default:
      return "Summer";
  }
}
