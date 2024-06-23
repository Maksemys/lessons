// Сторогий режим
"use strict"

// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body
console.log(bodyElement)

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

function addItems (num = 3) {
	const body = document.body
	let item = ""
	for (let i = 1; i <= num; i++) {
		item += `<li>Пункт№${i}</li>`
	}
	body.insertAdjacentHTML('beforeend', 
	`<ul>${item}</ul>`)
}

addItems()
addItems(10)

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

// константа bodyElement створена у задачі №1
bodyElement.classList.add('loaded')
if (bodyElement.classList.contains('loaded')) {
	bodyElement.style.color = `green`;
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const list = document.querySelectorAll('.item')
list.forEach((elem, index) => {
	elem.classList.add('active');
	elem.innerHTML = `Елемент №${index + 1}`;
})

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.button')
function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: "start",
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}

scrollToBlock(button);

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення атрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link');
link.setAttribute("data-speed", 100);
const speed = parseFloat(link.dataset.speed);

if (speed < 200) {
	link.style.color = "red";
 } else {
	link.style.color = "blue";
 }

