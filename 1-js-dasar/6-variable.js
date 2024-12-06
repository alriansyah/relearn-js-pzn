// var : rawan hoisting, bisa di deklarasi ulang dan tidak perlu menambahkan tipe variable nya ketika di deklarasi
var varName = "Al Riansyah";
var varName = "Al Riansyah var-1";
varName = "Al Riansyah var-1 reassign";
varFirstName = "Al";
varLastName = "Riansyah";
varFullName = varFirstName + " " + varLastName;
varTemplateLiteral = `var - Halo, nama saya ${varFullName}`;
console.log(varTemplateLiteral);


// let : bisa di reasign namun tidak dapat di deklarasi ulang
// diperkenalkan tahun 2015 oleng ES6 (EcmaScript)
let letName = "Al Riansyah";
letName = "Al Riansyah let-1 reassign";
let letFirstName = "Al";
let letLastName = "Riansyah";
let letFullName = letFirstName + " " + letLastName;
let letTemplateLiteral = `let - Halo, nama saya ${letFullName}`;
console.log(letTemplateLiteral);


// const : tidak bisa di reassign
// diperkenalkan tahun 2015 oleng ES6 (EcmaScript)
const constName = "Al Riansyah";
const constFirstName = "Al";
const constLastName = "Riansyah";
const constFullName = constFirstName + " " + constLastName;
const constTemplateLiteral = `const - Halo, nama saya ${constFullName}`;
console.log(constTemplateLiteral);