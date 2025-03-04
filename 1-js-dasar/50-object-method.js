// Object Method :
// - Function di object kdang disebut sebagai object method

const person = {
  name: "Al Riansyah",
  age: 20,
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
};

person.sayHello("Eko Kurniawan");

// Menambah method ke object :
person.sayHello3 = function (name) {
  console.log(`Hello ${name}`);
};

person.sayHello3("Eko Kurniawan Khannedy");
