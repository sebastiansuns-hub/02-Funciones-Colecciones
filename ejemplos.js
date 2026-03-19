// funciones en javascript
console.log(sumar(2, 3)); // Output: 5  hoisting

function sumar(a, b) {
  return a + b;
}

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(4, 5)); // Output: 20

// arrow  o funciones flecha
const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max); // devuelve el valor de num limitado entre min y max
};

console.log(clamp(5, 1, 10)); // Output: 5

const restar = (a, b) => a - b; // función flecha con retorno implícito
console.log(restar(10, 3)); // Output: 7

// pramnetros por defecto

function greet(name = "Invitado") {
  return `Hola, ${name}!`;
}
console.log(greet());

// arrays  y metodos claves

const values = [10, 20, 30, 40, 50]; // map filter
// metodo map
const doubled = values.map((x) => x * 2);// [20, 40, 60, 80, 100]
console.log(doubled); // Output: [20, 40, 60, 80, 100]

// filter 

const expenses = [
  { description: "Alquiler", amount: 1200 },
  { description: "Comida", amount: 300 },
  { description: "Transporte", amount: 150 },
  { description: "Entretenimiento", amount: 200 },
  { description: "Comida", amount: 100 },
];

const food = expenses.filter(e => e.description === "Comida");
console.log(food); // Output: [{ description: "Comida", amount: 300 }, { description: "Comida", amount: 100 }]


// reduce (sumas, agrupaciones conteo etc)

const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0); // el cero es el valor inicial del acumulador total
console.log(totalAmount); // Output: 1950

//  find 

const transportExpense = expenses.find(e => e.description === "Transporte");
console.log(transportExpense); // Output