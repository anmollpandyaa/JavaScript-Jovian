// filter is similar to forEach, but it returns a value
const nums = [100, 500, 2500, 5000, 1000]

let bigNums = nums.filter((n) => {return n > 1000})
console.log(bigNums);

// filter is used to pass values which pass the condition
// i can do operations in filter but behind the scenes it is just calculating true and false, so only used for filtering