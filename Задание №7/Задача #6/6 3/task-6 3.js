const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

numbers.forEach((number) => {
  sum += Math.pow(number, 3);
});

console.log(sum);
