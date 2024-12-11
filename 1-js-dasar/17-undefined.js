// Undefined adalah sebuah kata kunci di javascript
// Undefined merupakan tipe data yang merepresentasikan sebuah data/variable yang
// belum didefinisikan nilainya.
// let nilai = undefined; // error
let nilai; // error
console.log(nilai);
console.log("-----------------------");


let alamat;
if (nilai === undefined) {
    console.log("Undefined");
} else {
    console.log("Defined");
}
console.log("-----------------------");


const fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined
console.log("-----------------------");

const siswa = {
    nama: "Al Riansyah",
}
console.log(siswa["umur"]); // undefined