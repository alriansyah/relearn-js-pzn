// With statement tidak boleh digunakan karena ambigu

// Tanpa With statement :
const person = {
    name: "Al Riansyah",
    alamat: "Palembang",
    age: 20
}

console.log(person.name);
console.log(person.alamat);
console.log(person.age);


// menggunakan with statement (mengecilkan scope/cakupan) :
with (person) {
    console.log(name);
    console.log(alamat);
    console.log(age);
}

// menggunaka destructuring :
const { name, alamat, age } = person;
console.log(name);
console.log(alamat);
console.log(age);