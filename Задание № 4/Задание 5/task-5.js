let userString = prompt("Введите текст для обрезки строки").trim();
const startSliceIndex = +prompt("Введите индекс, с которого  начать обрезку");
const endSliceIndex = +prompt(
  "Введите индекс, которым закончится обрезка строки"
);

alert(userString.slice(startSliceIndex, endSliceIndex));
