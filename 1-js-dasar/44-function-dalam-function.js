// Function Dalam Function / Nested Function :
// - function yang ada di dalamnya (function) disebut : inner function
// Inner function hanya dapat diakses di scope kita mebuat functionnya, tidak bisa di akses diluar scope

function outer() {
    function inner() {
        console.log("Inner function");
    }

    inner();
    inner();
}

outer();
// inner(); // error karena di luar scope