// Функція для відкриття/закриття меню
document.querySelector('.burger-icon').addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

// document.querySelector('.button-div').addEventListener('.click', () => {
//     document.querySelector('.button').style.backgroundColor = 'blue';
// });

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("h1").textContent = "Привіт, JavaScript!";
});

let age = 15;
console.log("Ви ще дитина!");

// document.querySelector("h1").textContent = "Привіт, JavaScript!";