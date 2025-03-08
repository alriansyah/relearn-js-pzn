// Getter dan Setter :
// - adalah kemampuan membuat function yang berbeda untuk mengambil data (Getter)
// dan mengubah data (Setter) pada sebuah property di object.
// - dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun dalam function
// sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain-lain.

const person = {
  firstName: "Eko",
  lastName: "Kurniawan",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    // [this.firstName, this.lastName] = value.split(" "); // opsi 1
    const array = value.split(" "); // split untuk memisah
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

// otomatis memanggil get fullName()
console.log(person.fullName);

// otomatis memanggil set fullName()
person.fullName = "Joko Sasongko";
console.log(person.fullName);

person.fullName = "Joko Widodo";
console.table(person);
