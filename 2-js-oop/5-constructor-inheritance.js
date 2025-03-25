/*
Contructor Inheritance :
- Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function
- Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersebut
- Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)
- Contructor Inheritance bisa dibilang inheritance, tapi bukan inheritance yang sebenarnya. Lebih tepatnya mencopy semua property dari constructor lain
*/

function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, My name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName);
}

const eko = new Manager("Eko", "Khanedy");
console.info(eko);
