// Method di constructor function
function Person() {
  this.firstName = ""; // initial property firstName
  this.lastName = ""; // initial property lastName
  this.syaHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
  };
}

// Membuat object menggunakan constructor function
const rian = new Person();
rian.firstName = "Al";
rian.lastName = "Riansyah";
rian.syaHello("Eko");

const budi = new Person();
budi.firstName = "Budi";
budi.lastName = "Utomo";
budi.syaHello("Joko");

console.log(rian);
console.log(budi);
