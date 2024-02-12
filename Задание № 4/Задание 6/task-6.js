let userString = prompt("Введите текст для обрезки").trim();

let startSliceIndex = parseInt(
  prompt("Введите индекс, с которого нужно начать обрезку строки"),
  10
);
let endSliceIndex = parseInt(
  prompt("Введите индекс, которым нужно закончить обрезку строки"),
  10
);

let resultString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${resultString}`);
