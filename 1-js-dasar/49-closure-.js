// Closure :
// - yaitu : kombinasi function dan bundel referensi  ke data sekitarnya
// - kita sudah tau bahwa scope tidak bisa di akses di luar scopenya
// - dengan kemampuan closure, kita bisa membuat sebuah function  di local scope
// dan referensi ke data di sekitar local scope terebut, keluar scopenya

function createAdder(value) {
  const owner = "Eko";
  function add(param) {
    console.log(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);
// seakan-akan jadi gini :
// function addTwo(param) {
//     console.log("Eko");
//     return 2 + param;
// }

console.log(addTwo(10));
console.log(addTwo(20));
console.log("---------------------");

const addTen = createAdder(10);
// seakan-akan jadi gini :
// function addTwo(param) {
//     console.log("Eko");
//     return 10 + param;
// }

console.log(addTen(10));
console.log(addTen(20));
