// Property di constructor function
function Person() {
  this.firstName = ""; // initial property firstName
  this.lastName = ""; // initial property lastName
}

// Membuat object menggunakan constructor function
const rian = new Person();
rian.firstName = "Al";
rian.lastName = "Riansyah";

const budi = new Person();
budi.firstName = "Budi";
budi.lastName = "Utomo";

console.log(rian);
console.log(budi);
