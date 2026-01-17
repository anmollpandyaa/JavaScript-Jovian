let arr = [10, 20, 30, 40, 50]
console.log("original array: " + arr)

// slice returns specified index values (excluding upper value)
console.log("-----------------------")
console.log("sliced array: " + arr.slice(2, 4))
console.log("original array: " + arr)

// splice returns specified indexes (including upper value), and removes them from original array
console.log("-----------------------")
console.log("spliced array: " + arr.splice(2, 4))
console.log("original array: " + arr)