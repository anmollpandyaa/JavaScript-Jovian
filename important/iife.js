// iife is like a private room
// used to avoid global scope pollution problem
(function getName() {
    name = "Anmoll"
    console.log(name)
})()

// package function into an expression, like we did in arrow functions
// then add function call () immediately after function ends
// semicolon is required to end context after writing iife, sometimes may not produce error but recommended

// treat it just like a function, below i wrote arrow function, passed arguments, wrapped inside console.log
console.log(((num1, num2) => num1 + num2)(1601, 403))

// iifes are good for temporary calculation and helper function
// named iife means writing a function with name, unnamed can be arrow one