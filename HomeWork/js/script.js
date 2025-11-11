//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

/*const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

const names = fruts.map((item) => item.name);
console.log(names);*/

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

/*const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}*/

//  -- 3 --
//Замініть цикл "for" на "while"

/*for (let i = 0; i < 5; i++) {
  console.log(`цифра ${i}!`);
}*?

/*let i = 0;

while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
}*/

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

/*let number;

do {
  number = prompt("Введіть число, яке більше за 100:");
} while (number !== null && number !== "" && Number(number) <= 100);

console.log("Ви ввели:", number);*/

//  -- 5 --
// Вирахуйте середній вік

/*const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

let sum = 0;

for (let i = 0; i < girls.length; i++) {
  sum += girls[i].age;
}

let average = sum / girls.length;

console.log("Середній вік:", average);*/
