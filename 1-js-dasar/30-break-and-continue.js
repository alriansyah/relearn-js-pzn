// Break di dalam perulangan digunakan untuk menghentikan seluruh perulangan
// Continue di dalam perulangan digunakan untuk menghentikan perulangan saat ini,
// lalu melanjutkan ke perulangan selanjutnya


// Break :
let count = 1;
while (true) {
    console.log(`Perulangan ke ${count}`);
    count++;
    if (count > 10) {
        break;
    }
}
console.log("---------------------");

// Continue :
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`Perulangan Ganjil ${i}`);
}
console.log("---------------------");