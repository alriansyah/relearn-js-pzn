// typeof : untuk mengetahui tipe data dan outpunya berupa string
// ex output: "string", "number", "boolean", "object", "undefined", "symbol", etc

let data = "";

if (typeof data === "string") {
    console.log("string");
} else if (typeof data === "number") {
    console.log("number");
} else if (typeof data === "boolean") {
    console.log("boolean");
} else if (typeof data === "object") {
    console.log("object");
} else if (typeof data === "undefined") {
    console.log("undefined");
} else if (typeof data === "symbol") {
    console.log("symbol");
} else {
    console.log("unknown");
}

