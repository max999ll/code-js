console.log(Number('10'), typeof Number('10')); // явное

console.log(+'50'); // неявное
console.log(Number('50')); // теперь явное

console.log(Number('100')); // явное

console.log('' + 1); // неявное
console.log(String(1)); // теперь явное

console.log(String(1)); // явное

console.log(Boolean(0)); // явное

console.log(+'001'); // неявное
console.log(Number('001')); // теперь явное

console.log(1 + ''); // неявное
console.log(String(1)); // теперь явное

console.log(Boolean(1)); // явное

console.log(String("001")); // явное

console.log(Number('Hello World!')); // явное