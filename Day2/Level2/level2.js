let quote =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);
let quote2 =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"";
console.log(quote2);
console.log(typeof parseInt("10") == typeof 10);
console.log(Math.ceil(parseFloat("9.8")) == 10);
console.log("python".includes("on") && "jargon".includes("on"));
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51 + 50));
console.log(Math.floor(Math.random() * 256));
let text = "JavaScript";
console.log(text.charAt(Math.floor(Math.random() * text.length)));
console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`);
let text2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(text2.substr(text2.search("because"), "because".length * 3 + 2));
