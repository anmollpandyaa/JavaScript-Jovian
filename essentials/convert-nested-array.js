// if we have a nested array like this
let arr = ["i", "am", "a", ["computer", "science", ["engineer"]]]
// we can convert it into a single array using flat method

let about = arr.flat(3) // or we can simply write infinity
console.log(about)