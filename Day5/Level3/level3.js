const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let max = Math.max.apply(null, ages);
console.log(`Max: ${max}`);
let min = Math.min.apply(null, ages);
console.log(`Min: ${min}`);
console.log(`Range: ${max - min}`);
let sum = 0;
ages.forEach(function (value) {
  sum += value;
});
let average = sum / ages.length;
console.log(average);
if (max - average > Math.abs(min - average)) console.log("MAX");
else if (max - average < Math.abs(min - average)) console.log("MIN");
else console.log("MAX=MIN");
