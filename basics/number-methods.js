const num = 150.2525
console.log("toFixed:", num.toFixed(2)) // %.2f of js, nut gives a string
console.log("toPrecision:", num.toPrecision(5))

const price = 100000
console.log("toLocaleString (US):", price.toLocaleString("en-US"))
console.log("toLocaleString (IN):", price.toLocaleString("en-IN")) // can be modified for different currencies

// max and min value are same as java
// but we also have min safe integer and max safe integer
console.log("Max Value:", Number.MAX_VALUE)
console.log("Min Value:", Number.MIN_VALUE)
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER)
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER)

// we have random() to generate a random number between 0 and 1
// to make it between 1 to 10, we multiply it by 10
// i am using .toPrecision(1) to get only one digit
let randInt = (Math.random()*10).toPrecision(1)
console.log("Random Integer:", randInt);

// but precise returns a string, so we will use floor
let randIntFloor = Math.floor(Math.random()*10) + 1
// without + 1 it will give between 0 to 9
console.log("Random Integer (using floor):", randIntFloor);

// to generate numbers in a range, we can use the formula

let min = 10
let max = 20
console.log("Random Integer between 10 and 20:", Math.floor(Math.random() * (max - min + 1)) + min);

// other imp methods are abs and round. max and min are same as java
console.log("Absolute Value of -50:", Math.abs(-50))
console.log("Round 4.6:", Math.round(4.6))
console.log("Max of (10, 20, 5):", Math.max(10, 20, 5))
console.log("Min of (10, 20, 5):", Math.min(10, 20, 5))