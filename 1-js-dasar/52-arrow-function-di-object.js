// Arrow function di object method :
// - Arrow function juga bisa digunakan di object method
// - Namun perlu diketahui, arrow function tidak bisa digunakan untuk mengakses arguments object,
// function generator, kata kunci this dan kata kunci super
// - Jadi pastikan  gunakan arrow function hanyamemang ketika kita tidak butuh  fitur-fitur diatas

const person = {
  name: "Al Riansyah",
  age: 20,
  sayHello: (name) => {
    console.log(this); // kekurangan arrow : tidak bisa  mengacu ke person namu malah ke Window
    console.log(`Hello ${name}`);
  },
  sayHello2: function (name) {
    console.log(this); // anonymus function : mengacu ke person (semua yg ada di person)
    console.log(`Hello ${name}`);
  },
};

person.sayHello("Eko Kurniawan"); // Hello Eko Kurniawan
person.sayHello2("Joko"); // Hello Joko
