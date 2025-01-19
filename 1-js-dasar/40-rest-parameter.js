// Rest parameter :
// - fitur dimana kita bisa mengirim data/argumen sebanyak-banyaknya pada satu parameter
// , dan secara otomatis akan di konversi menjadi array
// - Rest parameter hanya boleh ada satu di function , tidak boleh ada lebih dari 1
// - Posisi rest paramaeter harus di akhir, tidak boleh di depan, tengah, kecuali memang
// hanya 1 parameter

function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.log(`Total ${name} : ${total}`);
}

sum("Anggur", 10, 20, 30, 40);
sum("Banana", 10, 20, 30, 40, 50);
sum("Jeruk", 10, 20, 30, 40, 50, 60);
sum("Nangka", [10, 20, 30, 40, 50, 60]); // output [[10, 20, 30, 40, 50, 60]], solusinya gunakan spread operator

// Sprwad Syntax :
// - Kadang kita terlanjur memiliki data berupa array
// - Tapi untungya kita juga bisa mengirim Array ke rest parameter
// - Kita bisa gunakan ... (titi 3 kali) diikuti dengan array nya ketika memanggil function
// - Fitur ini dinamakan spread syntax

sum("Nangka", ...[10, 20, 30, 40, 50, 60]); // output 210

const numbers = [10, 20, 30, 40, 50, 60];
sum("Semangka ", ...numbers); // output 210

// Argumens object :
// - fitur lama sebelum ada rest parameter
// - saat ini tidak di rekomendasikan
function oldSum() {
  let total = 0;
  for (const item of arguments) {
    total += item;
  }
  console.log(`Total : ${total}`);
}
oldSum(10, 20, 30, 40);
