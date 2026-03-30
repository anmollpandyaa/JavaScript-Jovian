// normal function
function add(num1, num2) {
    return num1 + num2
}

// arrow function
const addNum = (num1, num2) => {
    return num1 + num2
}

// implicit return way
const addNums = (num1, num2) => num1 + num2

// another way, often used in react
const addNumsOnceAgain = (num1, num2) => ( num1, num2 )

// return object
const getName = () => ({name: "Anmoll", skill: "pretty much everything"})

console.log(getName())

// if i start a block, i need to explicitly return, else it will be returned implicitly