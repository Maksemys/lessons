// Сторогий режим
"use strict"

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

// const items = document.querySelectorAll('.page__item')


// items.forEach(item => {
// 	item.addEventListener("click", () => {
// 		item.classList.toggle('active')
// 	})
// })

// або

document.addEventListener("click", documentAction)

function documentAction(e) {
	const itemTarget = e.target

	if (itemTarget.closest('.page__item')) {
		const currentElement = itemTarget.closest('.page__item')
		currentElement.classList.toggle('active')
	}
}


// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

const bodyElement = document.body;
window.addEventListener("load", pageLoaded);

function pageLoaded(e) {
  bodyElement.classList.add("loaded");
}

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.


const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

header.addEventListener("mouseenter", colorFooter);
header.addEventListener("mouseleave", colorFooter);

function colorFooter(e) {
	 if (e.type === "mouseenter") {
		  footer.classList.add('color');
	 } else  if (e.type === "mouseleave") {
		  footer.classList.remove('color');
	 }
}

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.


const elementCount = document.querySelector(".count")
const elementCountItem = document.querySelector(".count__item")
const dataCountElementCountItem = elementCountItem.dataset.count
const dataSpeedElementCountItem = elementCountItem.dataset.speed

// observer параметри
const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.8,
}

// коли об'єкт з'явиться
const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			elementCountItem.classList.add('animate')
			//запускаємо інтервал який починає рахувати як з'явиться
			let i = 0
			let count = setInterval(() => {
			i === +dataCountElementCountItem ? clearInterval(count) : ++i
			elementCountItem.innerHTML = `${i}`
			}, dataSpeedElementCountItem)
		}
	})
}
// observer створення
const observer = new IntersectionObserver(callback, options)
// observer відслідковування елементу
observer.observe(elementCount)