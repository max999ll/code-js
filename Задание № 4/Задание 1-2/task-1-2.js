const myName = "Максим";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Чеботов Никита Михайлович";
const reasonText = "Перспективно";
const numberOfMonths = 4;

let myInfoText = `Всем привет! Меня зовут, ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучал ${programmingLanguage} ${numberOfMonths} месяцев. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT").toUpperCase();

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);
