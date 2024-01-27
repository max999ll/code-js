console.log(Number(' 1 2 3 4 5"')); // NaN

console.log(Number("1234 5")); // NaN

console.log(Number("12345")); // NaN

console.log(String(false)); // false

console.log(Boolean(0000000)); // false

console.log(Boolean(0.00000001)); // true

console.log(String(undefined)); // undefined

console.log(Number('100f')); // Nan

console.log(Number('100')); // Nan

console.log(Number('000001')); // 1