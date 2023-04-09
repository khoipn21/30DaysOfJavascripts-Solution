let challenge = "30 Days Of JavaScript";
let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.slice(challenge.indexOf("Days")));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(social.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);
console.log(" 30 Days Of JavaScript ".trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/g));
console.log("30 Days of".concat(" JavaScript"));
console.log(challenge.concat(" ").repeat(2));
