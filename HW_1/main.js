// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let smt = 'hello';
let smt1 = 'owu';
let smt2 = 'com';
let smt3 = 'ua';
let smt4 = 1;
let smt5 = 10;
let smt6 = -999;
let smt7 = 123;
let smt8 = 3.14;
let smt9 = 2.7;
let smt10 = 16;
let smt11 = true;
let smt12 = false;

//     Вивести кожну змінну за допомогою: console.log

console.log(smt);
console.log(smt1);
console.log(smt2);
console.log(smt3);
console.log(smt4);
console.log(smt5);
console.log(smt6);
console.log(smt7);
console.log(smt8);
console.log(smt9);
console.log(smt10);
console.log(smt11);
console.log(smt12);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Vladyslav';
let midlleName = 'Marianovych';
let lastName = 'Ostafiychuk';

let person = `${lastName} ${firstName} ${midlleName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('What is your name?', "");
let patronymic = prompt('What is your patronymic name?', "");
let age = prompt('What is your age?', "");

let message = `Your name is ${name}, your patronymic name is ${patronymic} and your age is ${age}`;

alert(message);
console.log(message);

