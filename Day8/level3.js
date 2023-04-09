const personAccount = {
  firstName: "Khoi",
  lastName: "Pham",
  incomes: {
    job: 500,
    allowance: 500,
  },
  expenses: {
    food: 200,
    fuel: 200,
    relax: 200,
  },
  totalIncomes: function () {
    let totalIn = 0;
    let values = Object.values(this.incomes);
    for (let i = 0; i < values.length; i++) totalIn += values[i];
    return totalIn;
  },
  totalExpenses: function () {
    let totalEx = 0;
    let values = Object.values(this.expenses);
    for (let i = 0; i < values.length; i++) totalEx += values[i];
    return totalEx;
  },
  addIncome: function (newIn, newVal) {
    this.incomes[newIn] = newVal;
  },
  addExpense: function (newEx, newVal) {
    this.expenses[newEx] = newVal;
  },
  accountBalance: function () {
    return this.totalIncomes() - this.totalExpenses();
  },
  accountInfo: function () {
    return `name:${this.firstName} ${this.lastName}\n
            incomes:${Object.entries(this.incomes)}
            expenses: ${Object.entries(this.expenses)}
            totalIncome: ${this.totalIncomes()}
            totalExpenses: ${this.totalExpenses()}
            accountBalance: ${this.accountBalance()}
            `;
  }
};
personAccount.addIncome("Sponsor", 1000);
console.log(personAccount.accountInfo());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(usernames, pass, mail) {
  if (
    users.every((value) => {
      return value.username != usernames;
    })
  ) {
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 6; i++)
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    let dateCreated = new Date();
    id.join("");
    users.push({
      _id: id,
      username: usernames,
      email: mail,
      password: pass,
      createdAt: dateCreated,
      isLoggedIn: false,
    });
    console.log(`User ${usernames} signed up`);
  } else console.log("User exist");
}

function signIn(usernames, password) {
  let check = 0;
  for (let i = 0; i < users.length; i++)
    if (
      users[i].username.toLowerCase() == usernames.toLowerCase() &&
      users[i].password.toLowerCase() == password.toLowerCase()
    ) {
      users[i].isLoggedIn = true;
      check = 1;
      return `User ${usernames} signed in`;
      break;
    }
  if (check == 0) return "Invalid username or password";
}

function rateProduct(names, rate, username) {
  let check = 1;
  if (
    rate > 5 ||
    rate < 0 ||
    users.every(
      (value) => value.username.toLowerCase() != username.toLowerCase()
    )
  )
    check = 0;
  if (check == 1) {
    let tempId = "";
    for (let i = 0; i < users.length; i++) {
      if (users[i].username.toLowerCase() == username.toLowerCase())
        tempId += users[i]._id;
    }
    console.log(products[0].name.toLowerCase() == names.toLowerCase());
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase() == names.toLowerCase()) {
        products[i].ratings.push({
          userId: tempId,
          rate: rate,
        });
        console.log(products[i]);
      }
    }
  } else console.log("Error rating or username");
}

function averageRating(item) {
  let average;
  for (let i = 0; i < item.length; i++) {
    average = 0;
    for (let j = 0; j < item[i].ratings.length; j++)
      average += item[i].ratings[j].rate;
    average /= item[i].ratings.length;
    item[i].averageRatings = average;
  }
}

function likeProduct(productName, username) {
  let check = 1;
  if (
    users.every(
      (value) => value.username.toLowerCase() != username.toLowerCase()
    )
  ) {
    check = 0;
    console.log("error");
  }
  if (check == 1) {
    let tempId = "";
    for (let i = 0; i < users.length; i++) {
      if (users[i].username.toLowerCase() == username.toLowerCase())
        tempId += users[i]._id;
    }
    for (let j = 0; j < products.length; j++) {
      if (products[j].name.toLowerCase() == productName.toLowerCase()) {
        if (products[j].likes.length != 0) products[j].likes.splice(0);
        else products[j].likes.push(tempId);
      }
    }
  }
}
signUp("Khoi2112", "khoipcom21", "khoi@gmail.com");
console.log(signIn("Khoi2112", "khoipcom21"));
rateProduct("TV", 5, "Khoi2112");
rateProduct("TV", 5, "Khoi2112");

averageRating(products);
console.log(products);
likeProduct("mobile phone", "thomas");

signUp("khoi2112", "khoipcom21", "khoi@gmail.com");
console.log(users);
