let quote =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(quote.match(/love/gi).length);
let text =
  "You cannot end a sentence with because because because is a conjunction";
console.log(text.match(/because/gi).length);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const dispose = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
console.log(sentence.replace(dispose, ""));

let salary =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regEx = /\d+/g;
const total = salary.match(regEx);
let sum = 0;
total.forEach(cal);
function cal(value) {
  sum += parseInt(value);
}
console.log(sum);
