let arr1 = ["one", "two"]
let arr2 = ["three", "four"]

// inserts array inside an array
arr1.push(arr2)
console.log(arr1)

let firstName = ["Anmol"]
let lastName = ["Pandya"]

// add two arrays
let fullName = firstName.concat(lastName)
console.log(fullName)

let nums1 = [1, 2, 3]
let nums2 = [4, 5, 6]
let nums3 = [7, 8, 9]

// add more than two arrays, more preffered method
let allNums = [...nums1, ...nums2, ...nums3]
console.log(allNums)