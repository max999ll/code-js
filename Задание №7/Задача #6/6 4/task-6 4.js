const numbers = [10, 4, 100, -5, 54, 2];
const sum = numbers.reduce((acc, number) => acc + Math.pow(number, 3), 0);

console.log(sum);
