// Falsy / falsey : dalam konteks boolean akan di anggap false
// Truthy / truthy : dalam konteks boolean akan di anggap true

// Data yang di anggap falsy :
// - false          : nilai false
// - 0              : nilai 0 dan -0 dianggap false
// - "", '', ``     : string kosong dianggap false
// - null           : nilai null dianggap false
// - undefined      : nilai undefined dianggap false
// - NaN            : NaN dianggap false

// Data yang di anggap truthy :
// - kebalikan dari falsy
// - []             : array kosong dianggap true
// - {}             : object kosong dianggap true


const nama = "";

if (nama) {
    console.log("True");
} else {
    console.log("False");
}