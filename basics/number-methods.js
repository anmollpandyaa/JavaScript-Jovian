const num = 150.2525
console.log("toFixed:", num.toFixed(2)) // %.2f of js
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