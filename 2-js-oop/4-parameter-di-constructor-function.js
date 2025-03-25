// Parameter di constructor function
function Person(firstName, lastName) {
  this.firstName = firstName; // initial property firstName
  this.lastName = lastName; // initial property lastName
  this.syaHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
  };
}

// Membuat object menggunakan constructor function
const rian = new Person("Al", "Riansyah");
rian.syaHello("Eko");

const budi = new Person("Budi", "Utomo");
budi.syaHello("Joko");

console.log(rian);
console.log(budi);
