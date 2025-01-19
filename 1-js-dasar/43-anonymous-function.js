// Anonymaus function digunakan pada kasus ketika kita butuh mengirim functio2 yang sederhana
// Anonymaus function di variable :
const say = function (name) {
    console.log(`Hello ${name}`);
};

say("Al Riansyah");


//Anonymous function di parameter :
const perkenalan = function (callback) {
    callback("Al Riansyah");
}

perkenalan(say);
perkenalan(function (name) {
    console.log(`Perkenalkan nama saya : ${name}`);
})