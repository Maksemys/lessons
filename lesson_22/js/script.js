// Сторогий режим
"use strict"

// Задача №1
// Що потрапить в консоль?
console.log("ЗАДАЧА №1");

let someVar = 0;
someVar++;

if (someVar) {
	console.log(someVar);
}

// Відповідь: в консоль потрапить число 1


//Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.
console.log("ЗАДАЧА №2");

let someString = "Пункт №"

for (let num = 0; num < 11; ++num) {
	console.log(`${someString}${num}`)
}


// Задача №3
// Що потрапить в консоль ?
console.log("ЗАДАЧА №3");

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}
console.log("Відповідь: в консоль нічогоне потрапить");

//Відповідь: (false || false && true || false), в консоль нічогоне потрапить бо не виконується жодна з умов


// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку
console.log("ЗАДАЧА №4");

const a = 500
const b = 10

function calcDevive(a = 1, b = 1) {
	let result = a / b;
	if (result == "Infinity") {
		console.log("На 0 ділити не можна!");
	 } else if (!result) {
		console.log(`Функція не має повертати NaN, ведіть числове значення`);
	 } else {
	console.log(`Результат ділення: ${result}`);
	}
	return result;
	
}

calcDevive(a)
calcDevive(b)
calcDevive(a, 20)
calcDevive(1, 0)
calcDevive(90, 5)
calcDevive(190, "5")
calcDevive(190, "string")
calcDevive(190, 360)
calcDevive()


// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
console.log("ЗАДАЧА №5");

let myArray = ["Maks", 39, true, "Hello", 10]

myArray.forEach((item) => {
	if (item === 10) {
		console.log(item);
	}
})



