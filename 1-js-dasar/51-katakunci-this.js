// Kata kunci this :
// - adalah referensi ke object milik siapa
// - tiap lokasi kata kunci this, bisa berbeda-beda referensi pemiliknya
// - dalam object method this merupakan referensi ke object pemilil functionnya
// - di global scope, this merupakan referensi ke global object (di browser biasanya Window)
// - dalam function, this merupakan referensi ke global object (di browser biasanya Window)
// - di function dengan strict mode, this adalah undefined
// - dalam event, this merupakan referensi ke element yang menerima event

// lakukan di browser dan cek console
// console.log(this);

// function sample() {
//     console.log(this);
//     function inner() {
//         console.log(this);
//     }
//     inner();
// }

// sample();

// this ti object method :
const person = {
  name: "Al Riansyah",
  age: 20,
  sayHello: function (name) {
    // this = person
    console.log(this); // mengacu ke person (semua yg ada di person)
    console.log(`Hello ${name}, my name is ${this.name}`);
  },
};

person.sayHello("Eko Kurniawan"); // Hello Eko Kurniawan, my name is Al Riansyah
person.sayHello("Joko"); // Hello Joko, my name is Al Riansyah
