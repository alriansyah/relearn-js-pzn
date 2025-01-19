function perhitungan(a, b) {
  return a + b;
}

console.log(perhitungan(10, 20));

const hasil = perhitungan(10, 20);
console.log(hasil);

function getFinalScore(value) {
  if (value >= 90) {
    return "A";
  } else if (value >= 80) {
    return "B";
  } else if (value >= 70) {
    return "C";
  } else if (value >= 60) {
    return "D";
  } else {
    return "E";
  }
}

console.log(getFinalScore(90));
const nilai = getFinalScore(90);
console.log(nilai);

// ingat, ketika return maka kode berikutnya tidak akan terekseskusi

function isContains(array, searchValue) {
  for (const element of array) {
    console.log(`iterasi ke : ${element}`);
    if (element === searchValue) {
      return element;
    }
  }
  return false;
}

const array = [1, 32, 4324, 3, 43, 53, 53, 43, 43, 535, 35, 5];
const search = 43;
const found = isContains(array, search);
console.log(found);
