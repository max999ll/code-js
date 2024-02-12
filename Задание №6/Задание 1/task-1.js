function getName1(Name) {
  return `Имя ${Name}.`;
}

const getName2 = function (Name) {
  return `Имя ${Name}.`;
};

const getName3 = (Name) => `Имя ${Name}.`;

console.log(getName1("Максим"), getName2("Егор"), getName3("Дмитрий"));
