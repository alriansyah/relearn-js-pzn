// Optional Chaining (?) :
// merupakan operator yang digunakan untuk mengamankan ketika kita ingin mrngakses
// properti sebuah objek dari data nullish.
// Jika kita mencoba mengakses property dari sebuah objek dari data nullish tanpa
// menggunakan optional chaining, maka akan terjadi error.

const person = {};
// console.log(person.name.age); // error: ketika akses age tapi objek yg kita akses bernilai undefined maka akan error

let age;
// cara ribet :
if (person.name !== undefined && person.name !== null) {
    age = person.name.age;
}

// cara cerdas : 
console.log(person?.name?.age); // undefined
// penjelasan : ketika person tidak nullish maka akan akses property name dan jika name tidak nullish maka akan akses property age