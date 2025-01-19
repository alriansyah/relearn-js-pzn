// Spread syntax :
// - Kadang kita terlanjur memiliki data berupa array
// - Tapi untungnya kita bisa mengirim array ke rest parameter
// - Kita bisa gunakan ...(titik tiga kali) diikuti dengan array nya ketika memanggil function
// - Fitur ini dinamakan spread syntax
// - Spread syntax digunakan untuk merubah data array menjadi rest parameter

function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.log(`Total ${name} : ${total}`);
}

sum("Anggur", ...[10, 20, 30, 40]);
sum("Banana", ...[10, 20, 30, 40, 50]);
sum("Jeruk", ...[10, 20, 30, 40, 50, 60]);
sum("Nangka", ...[10, 20, 30, 40, 50, 60]);
console.log("-----------------------");

// Menggabungkan array dengan spread operator :
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);
console.log("-----------------------");
