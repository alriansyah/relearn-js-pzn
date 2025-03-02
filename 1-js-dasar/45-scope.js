// Scope :
// - Area akses sebuah data
// - ada 2 jenis : local scope dan global scope
// - data di global scope bisa di akases di local scope
// -  namun data di local scope tidak bisa di akses di global scope (error)

// Global scope :
let counter = 0;

// global scope :
function hitMe() {
  // Local scope :
  counter++;
  const namaLocal = "Eko Kurniawan";
}

// global scope :
function outher() {
  // Local scope :

  const namaLocal = "Al Riansyah";
}

hitMe(); // counter = 1
hitMe(); // counter = 2
console.log(counter); // 2 (karena sudah di modifikasi oleh function hitMe())

// console.log(namaLocal); error karena namaLocal berada di local scope
