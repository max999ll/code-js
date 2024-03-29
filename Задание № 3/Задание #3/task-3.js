console.log(Number(console.log), Boolean(console.log), String(console.log));

const person = { name: "Maxim" };
console.log(Number(person), Boolean(person), String(person));

const key = Symbol("key");
console.log(Number(key), Boolean(key), String(key));

console.log(Number(Number), Boolean(Number), String(Number));

console.log(Number(""), Boolean(""), String(""));

console.log(Number(0), Boolean(0), String(0));

console.log(Number(-10), Boolean(-10), String(-10));

console.log(Number("-105"), Boolean("-105"), String("-105"));