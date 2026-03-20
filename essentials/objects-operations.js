const obj1 = {
    1: "Anmol",
    2: "Shanaya"
}

const obj2 = {
    3: "Nayesha",
    4: "Imran"
}

// can also assign like this. optional but recommended
// const names = Object.assign({}, obj1, obj2)
// it acts as: {} -> source obj1 -> target
// without {}, data goes in obj1, with {}, all data combined and get inside {}

const names = Object.assign(obj1, obj2)
console.log(names);

// same way as arrays and more used
const boys = {
    1: "Rajeev",
    2: "Jaydeep"
}

const girls = {
    3: "Chaya",
    4: "Neescha"
}

// using spread opreator
const members = {...boys, ...girls}
console.log(members)

console.log(Object.keys(boys))
console.log(Object.values(boys))
console.log(Object.entries(boys))

console.log(boys.hasOwnProperty("1"))
console.log(boys[1] ?? "not present")

// de structuring of object
// crucial concept for react, used in props

const data = {
    name: "anmoll",
    specialisation: "cloud"
}

const {name: username} = data
console.log(username)
const {specialisation} = data
console.log(specialisation)