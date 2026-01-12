console.log("anmoll")

// cannot be changed
const accountID = 1 
// can be changed
let accountName = "anmollpandyaa"
let accountPassword = "anmolisgood"

console.table([accountID, accountName, accountPassword])

// convertion to number
let num = "123"
let numInInt = Number(num)
console.log(numInInt, typeof numInInt)

let wrongNum = "ABC123"
let wrongNumInInt = Number(wrongNum)
console.log(wrongNumInInt, typeof wrongNumInInt)

let bool = true
let boolInInt = Number(bool)
console.log(boolInInt, typeof boolInInt)

// convert to negative value
let positiveNum = 1
let negativeNum = - positiveNum
console.log(negativeNum)

// string concatination
let firstName = "Anmoll"
let lastName = "Pandya"
let fullName = firstName + " " + lastName // or can add space either in first or last name
console.log(fullName)

/*
let maybeStr = "1" + 1 + 1 + 1 + 1
let maybeInt = 1 + 1 + 1 + 1 + "1"
console.log(maybeStr, typeof maybeStr)
console.log(maybeInt, typeof maybeInt)

Operations are carried out left to right, and the moment JavaScript encounters a string with +, 
it switches to string concatenation for the rest of the expression.
*/