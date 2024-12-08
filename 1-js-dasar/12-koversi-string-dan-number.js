// Konversi string dan number :

const stringNumber = "10";
const number = 10;
console.log(typeof stringNumber);
console.log(typeof number);
console.log(stringNumber + number);
console.log(parseInt(stringNumber) + number);
console.log(Number(stringNumber) + number);
console.log(parseFloat(stringNumber) + number);
console.log(parseFloat(number));
console.log(+stringNumber + number);
console.log(typeof number.toString());
console.log("--------------------------");

console.log(parseInt("11.9"));
console.log(Number("11.3"));
console.log('--------------------------');

console.log(Number('ini NaN karena tidak valid'));
console.log(Number('ini NaN karena tidak valid' + 1));
console.log('--------------------------');

console.log(parseFloat('1.3ini bisa karena ada angka di awalannya'));
console.log(parseInt('1.3ini bisa karena ada angka di awalannya'));
console.log(Number('1.3ini tidak bisa karena Number tidak dapat mentolerir apapun kondisinya'));
console.log('--------------------------');

console.log(isNaN('1.3ini bisa karena ada angka di awalannya'));
console.log(isNaN('ini NaN karena tidak valid'));
console.log(isNaN('1'));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(null));
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log('--------------------------');











