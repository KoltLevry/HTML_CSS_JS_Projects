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

const mainContainer = document.getElementById("main");

let originData = [];
let currentData = [];

const applyPrice = () => {
    if(Number(inputMin.value) >= 5) {
        console.log(inputMin.value);
    } else {
        console.log("none try min");
    }

    if(Number(inputMax.value) <= 15) {
        console.log(inputMax.value);
    } else {
        console.log("none try max");
    }
}

const saveChange = () => {

}

const resetAll = () => {

}

document.addEventListener("DOMContentLoaded", () => {
    // initTable();
    applyButton.addEventListener("click", applyPrice);
    saveButton.addEventListener("click", saveChange);
    resetAllButton.addEventListener("click", resetAll);
});
