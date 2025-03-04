// Recursive Function :
// - adalah kemampuan function untuk memanggil function dirinya sendiri
// - kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive
// - funtion, seperti contohnya kasus factorial

// factorial loop :
function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

const hasil = factorial(7);
console.log(hasil);
console.log(1 * 2 * 3 * 4 * 5 * 6 * 7);

// factorial recursive :
// Recursive Function :
// - adalah kemampuan function untuk memanggil function dirinya sendiri
// - kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive
// - funtion, seperti contohnya kasus factorial

// factorial recursive :
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

const hasilRecursive = factorialRecursive(7);
console.log(hasilRecursive);
console.log(1 * 2 * 3 * 4 * 5 * 6 * 7);

factorialRecursive(5);
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive(3)
// 5 * 4 * 3 * factorialRecursive(2)
// 5 * 4 * 3 * 2 * factorialRecursive(1)
// 5 * 4 * 3 * 2 * 1
