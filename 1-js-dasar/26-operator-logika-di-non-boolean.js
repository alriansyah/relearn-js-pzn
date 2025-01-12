// Operator logika OR (||) di Non Boolean :
// - Operator OR (||), membaca dari kiri ke kanan
// - Operator ini akan mengambil nilai pertama yang truethy
// - Jika tidak ada satupun yang bernilai truethy, maka nilai yang terakhir yang akan diambil
// - walaupun keduanya falsey
// ex case :
console.log("hello" || ''); // hello
console.log("" || []); // []
console.log("0" || "Nol"); // "0"
console.log(0 || "Nol"); // "Nol"
console.log(null || "NULL"); // "NULL"
console.log(undefined || "Undefined"); // "Undefined"
console.log(0 || false); // false

const person = {
    firstname: "",
    lastname: "Riansyah"
}

const nama = person.firstname || person.lastname;  
console.log(nama);




// Operator logika AND (&&) di Non Boolean :
// - Operator OR (&&), membaca dari kiri ke kanan
// - Operator ini akan mengambil nilai pertama yang falsey
// - Jika tidak ada satupun yang bernilai falsey, maka nilai yang terakhir yang akan diambil
// - walaupun keduanya true
// ex case :
console.log("hello" && ''); // ''
console.log("" && []); // ""
console.log("0" && "Nol"); // "Nol"
console.log(0 && "Nol"); // 0
console.log(null && "NULL"); // null
console.log(undefined && "Undefined"); // undefined
console.log(0 && false); // 0

const person2 = {
    firstname: "",
    lastname: "Riansyah"
}

const nama2 = person2.firstname && person2.lastname;
console.log(nama2);