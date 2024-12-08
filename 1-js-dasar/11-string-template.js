// Template Literal :
const firstName = "Al";
const lastName = "Riansyah";
const score = 10;

const fullName = `${firstName} ${lastName}`;
console.log(fullName)

// Expression di dalam template literal
console.log(`Halo, nama saya ${fullName}, dan saya ${score > 5 ? "lulus" : "tidak lulus"} dengan nilai ${score}.`);

// Multiline String
console.log(`Halo, nama saya ${fullName},
dan saya ${score > 5 ? "lulus" : "tidak lulus"} dengan nilai ${score}.`);
