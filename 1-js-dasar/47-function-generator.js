// Function Generator :
// - function yang digunakan untuk membuat data generator
// - generator adalah data yang bisa di iterasi seperti array
// - untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
// - dan untuk mengembalikan data di setiap iterasi, kita bisa gunakan kata kunci yield, diikuti datanya

function* createNames() {
  yield "Eko";
  yield "Kurniawan";
  yield "Khannedy";
}

const names = createNames(); // seakan-akan mirip seperti array, namun hanya bisa di iterasi dan tidak bisa di akses secara index
console.log(names); // coba di console browser untuk detilnya
for (const name of names) {
  // bisa di iterasi
  console.log(name);
}
console.log("---------------------");

// Kasus yang lebih komplex :
function* buatGanjil(value) {
  for (let i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const ganjil = buatGanjil(100);
for (const number of ganjil) {
  console.log(number);
}
console.log("---------------------");

// Lazy Evaluation :
// - Generator itu sifatnya lazzy
// - artinya : jika datanya belum kita ambil dari generator, maka yield
// - hemat komputasi, hemat data dll
// selanjutnya tidak akan di eksekusi
function* testLazzy(value) {
  for (let i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`Yield ${i}`);
      yield i;
    }
  }
}

const lazzy = testLazzy(20);
for (const number of lazzy) {
  console.log(number);
}
// console.log(lazzy.next().value); // next merupakan bawaan generator
// console.log(lazzy.next().value);
// console.log(lazzy.next().value);
console.log("---------------------");

// Contoh Eager :
function testEager(value) {
  const result = [];
  for (let i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`Eager ${i}`);
      result.push(i);
    }
  }
  return result;
}

const eager = testEager(20);
for (const number of eager) {
  console.log(number);
}
console.log("---------------------");
