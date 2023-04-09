const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let max = 0;
let index;
let loggedCount = 0;
let pointCount = 0;
const myObj = Object.assign({}, users);
const mern = [];
for (const property in users) {
  if (users[property].skills.length > max) {
    max = users[property].skills.length;
    index = property;
  }
  if (users[property].isLoggedIn) loggedCount++;
  if (users[property].points >= 50) pointCount++;
  if (
    users[property].skills.includes("MongoDB") &&
    users[property].skills.includes("Node") &&
    users[property].skills.includes("Express") &&
    users[property].skills.includes("React")
  )
    mern.push(property);
}
myObj.Khoi = {
  email: "Khoi@khoi.com",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  age: 20,
  isLoggedIn: false,
  points: 60,
};
console.log(loggedCount, pointCount);
console.log(index);
console.log(mern);
console.log(myObj);
const keys = Object.keys(users);
console.log(keys);
const value = Object.values(users);
console.log(value);

const countries = {
  name: "Vietnam",
  capital: "Hanoi",
  population: 90000000,
  languages: "Vietnamese",
};
console.log(countries);


// function likeProduct(productName, username) {
//   let check = 1;
//   if (
//     users.every(
//       (value) => value.username.toLowerCase() != username.toLowerCase()
//     )
//   )
//     {
//         check = 0;
//         console.log("error");
//     }
//   if (check == 1) {
//     let tempId = "";
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].username.toLowerCase() == username.toLowerCase())
//         tempId += users[i]._id;
//     }
//     for(let j=0;j<products.length;j++){
//         if(products[j].name.toLowerCase()==productName.toLowerCase()){
//             if (products[j].likes.length!=0) products[j].likes.splice(0);
//             else products[j].likes.push(tempId);
//         }
//     }
//   }
// }