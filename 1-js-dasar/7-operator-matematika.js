/*
    Operator Aritmatika :
    + (Penjumlahan)
    - (Pengurangan)
    * (Perkalian)
    ** (Pangkat/Exponent)
    / (Pembagian)
    % (Modulus / Sisa Bagi)
*/

const number1 = 2;
const number2 = 3;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 ** number2);
console.log(number1 / number2);
console.log(number1 % number2);

console.log("---------- Pembatas ----------");

/*
    Operator Augmented Assignment :
    += (Penjumlahan)
    -= (Pengurangan)
    *= (Perkalian)
    **= (Pangkat/Exponent)
    /= (Pembagian)
    %= (Modulus / Sisa Bagi)
*/

let number3 = 2;
let number4 = 3;

number3 += number4;
console.log(number3);

number3 -= number4;
console.log(number3);

number3 *= number4;
console.log(number3);

number3 **= number4;
console.log(number3);

number3 /= number4;
console.log(number3);

number3 %= number4;
console.log(number3);

console.log("---------- Pembatas ----------");

/*
    Operator Unary :
    - (Negasi)
    + (Positif)
    ++ (Increment)
    -- (Decrement)
*/

let number5 = 2;
let number5_1 = 2;

number5_1 = -number5_1;
console.log(number5);

number5_1 = +number5_1;
console.log(number5);

number5++;
console.log(number5);

number5--;
console.log(number5);