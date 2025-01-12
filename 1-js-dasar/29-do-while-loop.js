// do while merupakan perulangan mirip dengan while loop
// perbedaan ada di pengecekean kondisi
// Pengecekan kondisi di while loop dilakukan di awal sebelum perulangan dilakukan
// Sedangkan di do while loop,pengecekan kondisi dilakukan setelah perulangan dilakukan
// Oleh karena itu dalam do while loop, minimal pasti sekali perulangan di lakukan
// walaupun kondisi tidak bernilai true

let count = 1;
do {
    console.log(`Perulangan ke ${count}`);
    count++;
} while (count <= 10);