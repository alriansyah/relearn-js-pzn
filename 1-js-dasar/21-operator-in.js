// in operator adalah operator yang digunakan untuk mengecek apakah
// sebuah property ada di dalam objek atau tidak, outputnya : boolean
// bisa jg untuk mengecek array, namun jarang digunakan pada array.

const fruits = ["apple", "banana", "cherry"];

const result = "anggur" in fruits;
console.log(result);

const result2 = fruits[3] in fruits;
console.log(result2);

const user = {
    name: "Al Riansyah",
    age: 20,
    isAdmin: undefined
}

const check = "isAdmin" in user;
console.log(check);

// jika valuenya bernilai null atau undefined maka akan tetap di anggap ada / true
// intinya selama index dan propertinya ada maka akan true, walaupun bernilai undefined atau null