function sayHello(name) {
  console.log(`Hello ${name}`);
}

let say = sayHello;

sayHello("Al Riansyah");
say("Al Riansyah");

// Function di parameter
function giveMeName(callback) {
  callback("Eko");
}

giveMeName(sayHello);
giveMeName(say);
