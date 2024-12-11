// Hanya bisa berjalan di browser
alert("Hello World");

// prompt :
const nama = prompt("Masukkan nama :");
alert(`Nama anda : ${nama}`);

// Confirm :
const konfirmasi = confirm("Apakah anda bukan robot ?");
if (konfirmasi) {
    alert("Anda bukan robot");
} else {
    alert("Anda robot");
}