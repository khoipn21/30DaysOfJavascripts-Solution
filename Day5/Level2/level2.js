let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (shoppingCart.includes("Meat") == 0) shoppingCart.unshift("Meat");
if (shoppingCart.includes("Sugar") == 0) shoppingCart.push("Sugar");
let allergic = true;
if (allergic) shoppingCart.splice(shoppingCart.indexOf("Honey"));
index = shoppingCart.findIndex((value) => value == "Tea");
shoppingCart[index] = "Green Tea";
console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack)

