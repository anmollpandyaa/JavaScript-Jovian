// check if the value is an array
console.log(Array.isArray("ARRAY"))

// convert value into array
console.log(Array.from("ARRAY"))

// create an array from variables
let one = 1
let two = 2
let three = 3
let four = 4
let five = 5
console.log(Array.of(one, two, three, four, five))

// Object → Array?
// Use:

// Object.values() → values
// Object.keys() → keys
// Object.entries() → both

let record = {
    name: 'Anmol Pandya',
    registrationNumber: '22100BTCDFBI11297',
    admissionYear: 2022,
    course: 'FSDB'
}

console.log(Object.values(record))