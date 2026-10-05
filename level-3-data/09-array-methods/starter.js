// =============================================================
// Level 3 · Task 3 — Array methods
// =============================================================
// Each method takes a FUNCTION and calls it once for every item.
// That function is usually a short arrow function: product => ...

const products = [
  { name: "Notebook",      price: 4,  category: "stationery",  inStock: true  },
  { name: "Backpack",      price: 35, category: "bags",        inStock: true  },
  { name: "Pen set",       price: 8,  category: "stationery",  inStock: false },
  { name: "Water bottle",  price: 12, category: "accessories", inStock: true  },
  { name: "Laptop sleeve", price: 25, category: "bags",        inStock: false },
];


// TODO 1: log each product as "Notebook: $4"
//         products.forEach(product => console.log(...))


// TODO 2: const names = products.map(product => ...)
//         → ["Notebook", "Backpack", ...]


// TODO 3: const available = products.filter(product => ...)
//         Keep a product when the function returns true.


// TODO 4: const cheapNames = names of products with price under 10
//         products.filter(...).map(...)


// TODO 5: const backpack = products.find(product => ...)


// TODO 6: const total = products.reduce((sum, product) => ..., 0)
//         sum starts at 0 (the second argument). Return the new sum each time.


// TODO 7: const stockValue = the total price of in-stock products only
//         Hint: filter first, then reduce.

