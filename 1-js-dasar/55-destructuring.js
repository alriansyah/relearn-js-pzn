// Destructuring :
// - adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object
// ke dalam variable-variable
// - Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object
// tanpa harus melakukan pemanggilan data satu per satu

// Mengambil data manual :
const fruit = ["apple", "banana", "cherry"];
const buah1 = fruit[0];
const buah2 = fruit[1];
const buah3 = fruit[2];

console.log(buah1);
console.log(buah2);
console.log(buah3);

// Mengambil data dengan destructuring : Destructuring Array
const person = ["Budi", "Eko", "Kurniawan", "Khannedy", "Angga", "Riansyah"];
const [name1, name2, name3, ...other] = person; // combine spread operator

console.log(name1);
console.log(name2);
console.log(name3);
console.log(other);
console.log("-----------------------");

// Mengambil data dengan destructuring : Destructuring Object
const personal = {
  firstName: "Eko",
  lastName: "Khannedy",
  address: {
    street: "Jalan Belum Ada",
    city: "Jakarta",
    country: "Indonesia",
  },
  hobby: "Gaming",
  channel: "Programmer Zaman Now",
};

// const firstName = personal.firstName; // manual

// Destructuring Object :
const {
  firstName,
  lastName,
  address: { street, city, country },
  ...lainnya
} = personal;
console.log(firstName);
console.log(lastName);
console.log(street);
console.log(city);
console.log(country);
console.log(lainnya);
console.log("-----------------------");

// Destructuring function parameter (1) :
function displayPerson({ firstName, middleName, lastName }) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
const person2 = {
  firstName: "Eko",
  middleName: "Kurniawan",
  lastName: "Khannedy",
};

displayPerson(person2);
console.log("-----------------------");

// Destructuring function parameter (2) :
function sum([first, second]) {
  return `Total : ${first + second}`;
}

console.log(sum([1, 2]));
console.log(sum([10, 20]));

// Default value :
const names = ["Eko", "Medenny"];
const [firstName2, lastName2 = "Khannedy"] = names;

console.log(firstName2);
console.log(lastName2);
console.log("-----------------------");

// Menggunakan Nama Variable Lain :
const fish = ["Salmon", "Tuna", "Trout"];
const [fish1, fish2, fish3] = fish;

console.log(fish1);
console.log(fish2);
console.log(fish3);
console.log("-----------------------");

const ikan = {
  ikan1: "Ikan Salmon",
  ikan2: "Ikan Tuna",
  ikan3: "Ikan Trout",
};

const { ikan1: iwak1, ikan2: iwak2, ikan3: iwak3 = "iwak default" } = ikan;

console.log(iwak1);
console.log(iwak2);
console.log(iwak3);
