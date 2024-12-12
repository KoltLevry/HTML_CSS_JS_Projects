const numbers = [11,2,32,4,55,16];
const mixed = [42, "hi", true, {name: "bob"}];
const fruits = ["apple","orange", "banana", "seed", "grapes"];
const fruits2 = new Array("apple", "pear"); // Цей спосіб використовується рідше.
console.log("Fruits 1: " + fruits[1]); // Елементи масиву мають індекси, які починаються з 0.
console.log("numbers lenght: " + numbers.length);
fruits2[3] = "orange";
console.log(fruits2);

// push() — додає елемент в кінець масиву.
fruits.push("mango");
console.log(fruits);

fruits.push(3);
console.log(fruits); 

// pop() — видаляє останній елемент.
fruits.pop();
console.log(fruits);

// --- !!!! дексктоп - програма на роб столі !!! ----

mixed.unshift("55detlef$");
console.log(mixed);

mixed.unshift("bla", "-300"); // тепер перший 
console.log(mixed);                        


// --- ! f11 - розширює екран !!! ----

// shift() — видаляє перший елемент.
mixed.shift();
console.log(mixed);

                                // ----- Перебір елементів масиву: ------
console.log()
console.log("--- for --- ")
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("--- for...of --- ")
for(const fruit of fruits){
    console.log(fruit);
}

console.log("--- foreach --- ")
fruits.forEach((fruit) => { 
    console.log(fruit);
});
                                // ----- Перебір елементів масиву: ------
// indexOf() — знаходить індекс елемента (або повертає -1, якщо елемента немає).
console.log("Find 'mango' index: " + fruits.indexOf("mango"));
console.log("Find 'fish' index: " + fruits.indexOf("fish"));
console.log()
// includes() — перевіряє наявність елемента.
console.log("Is 'apple' exist: " + fruits.includes("apple"));
console.log("Is 'root' exist: " + fruits.includes("root"));
console.log()
// sort() — сортує масив за алфавітом.
numbers.sort();
console.log(numbers);
console.log("nichts with fruits")

fruits.sort();
console.log(fruits);

// reverse() — змінює порядок елементів на протилежний.
numbers.reverse();
console.log(numbers);
fruits.reverse();
console.log(fruits);

console.log()
// splice() — видаляє або додає елементи.
console.log(fruits2);
fruits2.splice(2, 1, "bobs");
console.log(fruits2);

console.log();
// slice() — повертає новий масив з вибраних елементів.
const newFruits2 = fruits2.slice(2,4); // (2,3) - 3 не входить = тільки  'bobs' | (2,4) - і 2 і 3, не 4 = 'bobs', 'orange'
console.log(newFruits2);

console.log();
// concat() — об'єднує два або більше масивів
fruits.reverse();
const allFruits = fruits.concat(fruits2);
console.log(allFruits);

console.log()
// join() — перетворює масив в рядок.
console.log(allFruits.join(" | "));
console.log();
// toString() — схоже на join(), але без роздільника.
console.log(allFruits.toString());

              // ---------- ТУц -----------
const products = [
    {id: 1, name: "Toster", price: 700},
    {id: 2, name: "Kocher", price: 500},
    {id: 43, name: "Sauber", price: 1500},
];

// Фільтрація та сортування даних
const foundProduct = products.find(product => product.id === 1);
console.log(foundProduct); 

const foundProduct2 = products.find(product => product.name === "Kocher");
console.log(foundProduct2);

const expensiveProducts = products.filter(product => product.price > 1000);
const notExpensiveProducts = products.filter(product => product.price < 1000);
console.log("Expensive products: " + JSON.stringify(expensiveProducts));
console.log("Not expensive products: " + notExpensiveProducts);
console.log("All products ex: ")
expensiveProducts.forEach(product => console.log(product));
console.log("All products not ex:");
notExpensiveProducts.forEach(product => console.log(product));
console.log();
expensiveProducts.forEach(product =>
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`)
);
// English
function sayHello() {
    console.log("Hello, World!");
};
sayHello();

// French 
function direBonjour() {
    console.log("Bonjour, le monde!");
};
direBonjour();
 