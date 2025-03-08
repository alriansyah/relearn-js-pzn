// Masalah pada variable var :
// - var tidak memiliki blok scope
// - terjadi hoisting

// global scope :
let i = 20;

for (let i = 1; i <= 10; i++) {
  // local scope :
  console.log(`Local : ${i}`);
}
console.log("---------------");

console.log(`Global : ${i}`);
console.log("---------------");

// global scope & var :
var i2 = 20;

for (var i2 = 1; i2 <= 10; i2++) {
  // local scope :
  console.log(`Local : ${i2}`);
}
console.log("---------------");

console.log(`Global : ${i2}`);
console.log("---------------");
