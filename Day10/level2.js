const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
let A = new Set(a);
let B = new Set(b);
let C = new Set([...a, ...b])
let intersection = a.filter(value => B.has(value))
const intersectionSet = new Set(intersection)
let diff = a.filter(value => !B.has(value))
const diffSet = new Set(diff)
console.log(diffSet)