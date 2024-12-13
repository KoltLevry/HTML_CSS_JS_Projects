/* Умови:
коли користувач вводить ціну мін і макс і нажимає  Хасосувати ціну, таблиця збінюється
 - якщо ціна мін/макс менше 0 чи більше 1000? нічого не відбувається
 - якщо ціна товару в діапазоні ціни мін/макс то в табличці залишається лише цей товар
 - якщо ціна мін/макс валідна а товару з такою ціною нема - то залиш порожня таблиця з написом Фільтер недійсний
(за замовчуванням таблиця перевантажується і відновл..ться всі записи)

при нажиманні кнопки Зберегти. записи (змін) збарігаються
при нажиманні кнопки Скинути. всі зміни скидуються
*/

const inputMin = document.querySelector('[name="inputMin"]');
const inputMax = document.querySelector('[name="inputMax"]');
const applyButton = document.querySelector('.applyButton');
const tableList = document.querySelector(".table");
const saveButton = document.querySelector('.saveButton');
const resetAllButton = document.querySelector('.resetAllButton');

let originData = [];
let currentData = [];

const applyPrice = () => {

}

const saveChange = () => {

}

const resetAll = () => {

}

document.addEventListener('("DOMContenLoaded")', () => {
    initTable();
    applyButton.addEventListener("click", applyPrice);
    saveButton.addEventListener("click", saveChange);
    resetAllButton.addEventListener("click", resetAll);
});