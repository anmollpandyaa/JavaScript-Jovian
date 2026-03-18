const id = "userId" // symbol

let user = {
    name: "Anmol Pandya",
    age: 22,
    [id]: "ap01",
    "designation": "R&D Engineer"
}

console.log("User: ")
console.log(user)

console.log("--------------------------")
console.log(`Name: ${user.name}`) // print normal values like this
console.log(`ID: ${user[id]}`) // symbols are accessed like this
console.log(`Designation: ${user["designation"]}`) // string keys are printed like this
console.log("--------------------------")

/*
user.designation = "DevOps Engineer" // modify values in a object
Object.freeze(user) // prevent object from getting modified
user.name = "Imran Khan"
console.log(user)
*/

// we can also create functions for object, and reference to it's data using this
user.intro = function name() {
    return `Hello! ${this.name} here.`
}
console.log(user.intro());