// array dimulai adri index 0
const array = [];
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log("-----------------------");

// setiap menambah data / nilai di array, maka akan ditambahkan di index terakhirnya
// Method / Operasi pada array :
// Push :
fruits.push("orange");
fruits.push("mango", "banana");
console.table(fruits);
console.log("-----------------------");

// Length :
console.log(fruits.length);
console.log("-----------------------");

// Mendapatkan index :
const arrayIndex = fruits[2];
console.log(arrayIndex);
console.log("-----------------------");

// Merubah nilai pada index :
fruits[1] = "grape";
console.table(fruits);
console.log("-----------------------");

// Delete (tidak akan merubah index dan length tidak berubah) :
// index akan tetap ada dan bisa diinisialiasi ulang
delete fruits[0];
console.table(fruits);

// jika di inisialisasi ulang maka akan tampil kembali
fruits[0] = "Jambu";
console.table(fruits);
console.log("-----------------------");

// Menghapus index terakhir :
fruits.pop();
console.table(fruits);
console.log("-----------------------");

// Array dalam array / multi dimensi (di javascript ini dapat dilakukan dan tidak ada batasan) :
fruits.push(["jeruk bali", "nangka", "melon"]);
console.table(fruits);
console.log("-----------------------");