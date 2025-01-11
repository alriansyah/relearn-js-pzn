// Nullist value adalah nilai yang null dan undefined
// Nullist Coalescing Operator (??) adalah operator mirip ternary operator
// yang membedakan adallah pada kondisi, jika bernilai null atau undefined,
// barulah defaultnya digunakan / diambil.


// ex cara ribet :
let parameter;

let data = parameter;

if (data === undefined || data === null) {
    data = "Nilai Default";
}
console.log(data);
console.log("-----------------------");

// ex cara nullish coalescing :
let parameter2 = 'Al Riansyah';
let data2 = parameter2 ?? "Nilai Default";
console.log(data2);