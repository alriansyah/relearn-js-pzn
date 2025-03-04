// Arrow Function :
// - Alternatif pembuatan function yang lebih sederhana
// - Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi

// Beberapa kekurangan arrow function :
// - tidak memiliki arguments objek
// - tidak bisa menggunakan function generator
// - tidak bisa mengakses this
// - tidak bisa mengakses super

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

sayHello("Al Riansyah");
console.log("---------------------");

// Arrow funtion tanpa block :
const perkenalan = (nama) => console.log(`Perkenalkan nama saya : ${nama}`);

perkenalan("Al Riansyah");
console.log("---------------------");

// Arrow function return value :
// - jika menggunakan blok, maka harus menggunakan return
// - jika tidak menggunakan blok, maka tidak perlu menggunakan return
const penjumlahan = (a, b) => a + b;

console.log(penjumlahan(10, 20));
console.log("---------------------");

// Arrow function tanpa kurung :
// - hanya bisa jika 1 parameter saja
const perkenalan2 = (nama) => console.log(`Perkenalkan nama saya : ${nama}`);

perkenalan2("Al Riansyah");
console.log("---------------------");

// Arrow function sebagai parameter :
function giveMeName(callback) {
  callback("Al Riansyah");
}

giveMeName((nama) =>
  console.log(`Arrow function sebagai paramaeter : ${nama}`)
);
