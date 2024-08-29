const nama = "Al Riansyah";
const hobi = 'Coding';
const umur = 24;

// teknik string concatenation
const perkenalan1 = "Halo, nama saya " + nama + ", umur saya " + umur + " tahun, dan hobi saya " + hobi + ".";

// teknik string template / template literal
const perkenalan2 = `Halo, nama saya ${nama}, umur saya ${umur} tahun, dan hobi saya ${hobi}.`;

console.log(perkenalan1);
console.log(perkenalan2);


// JavaScript mendukung Escape Sequences (ada banyak, browsing aja sendiri)
const perkenalan3 = 'Halo, nama saya \"Al Riansyah\", umur saya 24 tahun, dan hobi saya \"Coding\".';
const perkenalan4 = "Halo, nama saya \"Al Riansyah\", umur saya 24 tahun, dan hobi saya \"Coding\".";
console.log(perkenalan3);
console.log(perkenalan4);


