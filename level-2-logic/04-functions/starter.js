// =============================================================
// Level 2 · Task 1 — Functions
// =============================================================

// Example, already done for you:
function double(n) {
  return n * 2;
}
console.log("double(4) =", double(4));


// TODO 1: function square(n) → returns n times n
//         square(5) should give back 25
function square(n) {
  return n * n
}
console.log("square(5) =", square(5))


// TODO 2: function celsiusToFahrenheit(c) → returns c * 9 / 5 + 32
//         celsiusToFahrenheit(100) should give back 212
function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32
}
console.log("celesius = 100 ->", celsiusToFahrenheit(100))


// TODO 3: function greet(name = "friend") → returns `Hello, ${name}!`
//         greet("Sara") → "Hello, Sara!"     greet() → "Hello, friend!"
//         The = "friend" part is a DEFAULT value, used when nothing is passed in.

// 😶😥
// function greet(name) {
//   if (name) {
//     return console.log("hello", name)
//   }
//   return console.log("hello, friend")
// }

function greet(name = "friend") {
  return `Hello, ${name}!`;
}

// TODO 4: An ARROW FUNCTION is a shorter way to write a function:
//         const add = (a, b) => a + b;
//         With no { } the result is returned automatically.
const add = (a , b) => a + b ;
console.log("add ", add(5 , 6))

// TODO 5: function priceWithTax(price, taxRate = 0.15)
//         → returns the price plus tax
//         priceWithTax(100) → 115     priceWithTax(100, 0) → 100
function priceWithTax (price, taxRate = 0.15){
 return  price + taxRate * price
}
console.log("priceWithTax(100, 0.15):", priceWithTax(100, 0.15));
console.log("priceWithTax(100, 0):", priceWithTax(100 , 0));

// Try your functions here:
console.log(square(5), celsiusToFahrenheit(100), greet(), add(2, 3));


// TODO 6: Read this, run it, and answer in a comment:
//         why does `result` show undefined?
function logDouble(n) {
  return n * 2;
}
const result = logDouble(5);
console.log("result is", result);
// Your answer:
// not have return and console.log doesn't return a value


function isEven(n){
  return Number(n)%2 === 0;
}