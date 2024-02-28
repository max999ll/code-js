const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += Math.pow(numbers[i], 3);
}

console.log(sum);
