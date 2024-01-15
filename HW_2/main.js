// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [-5, 100, 'commit', 'push', true, false, null, undefined, [5, 10, 'car', 'bike'],
    {
        id: 0,
        firstName: 'Vlad',
        lastName: 'Ostafiychuk',
        age: 28,
        status: true
    }
]

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Witcher. The last wish',
    pageCount: 282,
    genre: "Dark fantasy"
}
let book2 = {
    title: 'Robinson Crusoe',
    pageCount: 392,
    genre: "Adventure"
};
let book3 = {
    title: 'The Hunger Games',
    pageCount: 384,
    genre: "Dystopian"
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let favouriteBooks = [
    {
        title: 'The Witcher. The last wish',
        pageCount: 282,
        genre: "Dark fantasy",
        authors: [
            {
                name: 'Andrzej Sapkowski',
                age: 74
            }
        ]
    },
    {
        title: 'Robinson Crusoe',
        pageCount: 392,
        genre: "Adventure",
        authors: [
            {
                name: 'Daniel Defoe',
                age: 74
            }
        ]
    },
    {
        title: 'The Hunger Games',
        pageCount: 384,
        genre: "Dystopian",
        authors: [
            {
                name: 'Suzanne Collins',
                age: 74
            }
        ]
    }
]
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Vlad',
        age: 28,
        password: "vlad28"
    },
    {
        name: 'Max',
        age: 25,
        password: "12345678"
    },
    {
        name: 'Dima',
        age: 30,
        password: "qwerty"
    },
    {
        name: 'Anna',
        age: 27,
        password: "01345"
    },
    {
        name: 'Olena',
        age: 35,
        password: "olena12"
    },
    {
        name: 'Oleg',
        age: 15,
        password: "oleg1"
    },
    {
        name: 'Roman',
        age: 19,
        password: "roma2000"
    },
    {
        name: 'Vova',
        age: 20,
        password: "vova10"
    },
    {
        name: 'Diana',
        age: 22,
        password: "dia10na"
    },
    {
        name: 'Misha',
        age: 30,
        password: "mishaqwerty"
    },
];
let user1 = users[0];
console.log(user1.password);
let user2 = users[1];
console.log(user2.password);
let user3 = users[2];
console.log(user3.password);
let user4 = users[3];
console.log(user4.password);
let user5 = users[4];
console.log(user5.password);
let user6 = users[5];
console.log(user6.password);
let user7 = users[6];
console.log(user7.password);
let user8 = users[7];
console.log(user8.password);
let user9 = users[8];
console.log(user9.password);
let user10 = users[9];
console.log(user10.password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть число, яке більше чи менше 0');
if (x !== 0) {
    alert('Вірно');
} else {
    alert('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('Введіть хвилини від 0 до 59');
if (time >= 0 && time < 15) {
    alert('Перша чверть години');
} else if (time >= 15 && time <= 29) {
    alert('Друга чверть години');
} else if (time >= 30 && time <= 44) {
    alert('Третя чверть години');
} else if (time >= 45 && time <= 59) {
    alert('Четверта чверть години');
} else {
    alert('???');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('Котре сьогодні число?');
if (day >= 1 && day <= 11) {
    alert('Перша декада');
} else if (day > 11 && day <= 21) {
    alert('Друга декада');
} else if (day > 21 && day <= 31) {
    alert('Третя декада');
} else {
    alert('???');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const day1 = prompt('Який сьогодні день тижня?');
switch (day1) {
    case 'Понеділок':
        alert('Monday');
        break;
    case 'Вівторок':
        alert('Tuesday');
        break;
    case 'Середа':
        alert('Wednesday');
        break;
    case 'Четвер':
        alert('Thursday');
        break;
    case 'П\'ятниця':
        alert('Friday');
        break;
    case 'Субота':
        alert('Saturday');
        break;
    case 'Неділя':
        alert('Sunday');
        break;
    default:
        alert('Невірне значення')
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let n1 = prompt('Введіть перше число', '');
let n2 = prompt('Введіть друге число', '');


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = prompt('Введіть будь-яке значення');

if (!!x1) {
    x1 = 'default';
}

console.log(x1)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    if (item.monthDuration > 5) {
        console.log(item.title, 'super')
    }
}