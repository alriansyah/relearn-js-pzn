const object = {};

const siswa = {
    nama: "Al Riansyah",
    "negara asal": "Indonesia"
}
console.table(siswa);
console.log("-----------------------");

// Mengakses property :
console.log(`Nama : ${siswa.nama}`);
console.log(`"Negara asal" : ${siswa["negara asal"]}`);
console.log("-----------------------");

// Menambah atau Mengubah :
siswa.nama = "Al Riansyah Edited";
siswa["umur"] = 20;
siswa.alamat = "Palembang";
console.table(siswa);
console.log("-----------------------");

// Menghapus :
delete siswa.umur;
delete siswa["alamat"];
console.table(siswa);