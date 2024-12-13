/* Умови:
коли користувач вводить ціну мін і макс і нажимає  Хасосувати ціну, таблиця збінюється
 - якщо ціна мін/макс менше 0 чи більше 1000? нічого не відбувається
 - якщо ціна товару в діапазоні ціни мін/макс то в табличці залишається лише цей товар
 - якщо ціна мін/макс валідна а товару з такою ціною нема - то залиш порожня таблиця з написом Фільтер недійсний
(за замовчуванням таблиця перевантажується і відновл..ться всі записи)

при нажиманні кнопки Зберегти. записи (змін) збарігаються
при нажиманні кнопки Скинути. всі зміни скидуються
*/

// // rows.forEach(row => {
// //     const name = row.children[0].textContent;
// //     const price = Number(row.children[1].textContent);
// //     console.log(`Name ${name}, Price: ${price}`);
// // });



const inputMin = document.querySelector('[name="inputMin"]');
const inputMax = document.querySelector("[name='inputMax']");
const applyBtm = document.querySelector(".applyButton");
const saveButton = document.querySelector(".saveButton");
const resetAllButton = document.querySelector(".resetAllButton");

const rows = document.querySelectorAll(".table tbody tr");

const loadProductsFromStorage = () => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    if(savedProducts.length > 0) {
        rows.forEach(row => {
            const name = row.children[0].textContent.trim();
            const price = Number(row.children[1].textContent.trim());
            const match = savedProducts.find(product => 
                product.name === name && product.price === price);
                row.style.display = match ? "" : 'none';
        });    
    }
};

const applyClick = () => {
    const minPrice = Number(inputMin.value);
    const maxPrice = Number(inputMax.value);
    
    if(minPrice < 0 || maxPrice > 1000 || minPrice > maxPrice) {
        alert("Invalid price value! Try again")
        return;
    }

    let filteredData = [];

    rows.forEach(row => {
        // const price = Number(row.children[1].value); // incorrect
        const price = Number(row.children[1].textContent.trim());
        
        if(price >= minPrice && price <= maxPrice) {
            row.style.display = "";
            filteredData.push({
                name: row.children[0].textContent.trim(),
                price: price
            });
        } else {
            row.style.display = "none";
        }
    });

    console.log("Filtered data: ", filteredData);
};

const saveBtnClick = () => {
    const filteredData = [...rows]
        .filter(row => row.style.display !== 'none') // Тільки видимі рядки
        .map(row => ({
            name: row.children[0].textContent.trim(),
            price: Number(row.children[1].textContent.trim())
        }));

    // Зберігаємо дані в localStorage
    localStorage.setItem('products', JSON.stringify(filteredData));

    console.log("Збережені дані:", filteredData);
};


const resetAllBtnClick = () => {
    rows.forEach(row => {
        row.style.display = '';
    });

    localStorage.removeItem('products');
    console.log("Всі зміни скинуті");
};

document.addEventListener("DOMContentLoaded", () => {
    applyBtm.addEventListener("click", applyClick);
    saveButton.addEventListener("click", saveBtnClick);
    resetAllButton.addEventListener("click", resetAllBtnClick);
    loadProductsFromStorage();
});

