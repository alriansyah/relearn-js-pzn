// For in merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object
// atau index di array
// Walaupun for in bisa  digunaka untuk array, namun tidak direomendasikan untuk array, karena
// biasanya kita jarang sekali butuh data index data index untuk array, kita bisa menggunakan for of untuk kasus array


const person = {
    firstname: "Eko",
    middlename: "Kurniawan",
    lastname: "Khannedy"
}

for (const props in person) {
    console.log(props); // nama property, bukan nilainya
    console.log(`${props}: ${person[props]}`); // nama dan nilai property
}



const fruits = ["apple", "banana", "cherry"];
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}