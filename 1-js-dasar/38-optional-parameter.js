// Optional parmeter : di js paramater by default adalah optional, jika tidak di isi maka akan undefined
// - tidak wajib di isi, namun secara otomatis akan undefined jika tidak di isi

function optionalParameter(firstname, middlename, lastname) {
  console.log(firstname);
  console.log(middlename);
  console.log(lastname);
}

optionalParameter();
optionalParameter("Al Riansyah");
optionalParameter("Eko", "Kurniawan", "Khannedy");
optionalParameter("Eko", "Kurniawan", "Khannedy", "Budi");
