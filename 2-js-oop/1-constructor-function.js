/*
- Sebelum EcmaScript versi 6, pembuatan class, biasanya menggunakan function. Hal ini dikarenakan sebenarnya JavaScript bukanlah bahasa pemrograman yang fokus ke OOP
- Untuk membuat class di JavaScript lama, kita bisa membuat function
- Function ini kita sebut dengan Constructor Function
- Best practice penamaan constructor function adalah menggunakan pascal case (PascalCase)
*/

// Membuat constructor function
function Person() {}

// Membuat object menggunakan constructor function
const rian = new Person();
const budi = new Person();