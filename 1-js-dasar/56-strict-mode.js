"use strict";

// Strict Mode :
// - Saat kita menjalankan kode program javascript, secara default kode program kita
// berjalan dalam mode tidak strict, atau istilahnya sloppy mode.
// Pada ES5, diperkenan mode strict, dimana ketika mode strict dijalankan, maka akan merubah
// beberapa cara kerja Javascript, seperti :
// ~ Merubah beberapa javascript error dari yang tadinya silent error, menjadi throw error (terlihat).
// ~ Memperbaiki beberapa kesalahan engine Javascript untuk optimisasi.
// ~ Menolak beberapa kode perintah yang kedepannya akan digunakan di ECMAScript.

// Meletakan Strict Mode :
// - di awal file atau dalam function

// use strict pada function :
function useStrictMode() {
  "use strict";
  const person = {
    firstName: "Eko",
  };
  with (person) {
    console.log(firstName);
  }
}

useStrictMode();
