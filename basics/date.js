console.log(`Date Methods-->
    `)
let date = new Date()
console.log("Date: " + date)
console.log("toString: " + date.toString())
console.log("toDateString: " + date.toDateString())
console.log("toTimeString: " + date.toTimeString())
console.log("toISOString: " + date.toISOString())
console.log("toJSON: " + date.toJSON)
console.log("toLocaleString: " + date.toLocaleString())
console.log("toLocaleDateString: " + date.toLocaleDateString())
console.log("toLocaleTimeString: " + date.toLocaleTimeString())

console.log("----------------------------------------------------------");

let declaredDate = new Date(2004, 5, 14) // Month is 0-indexed (0 = January, 5 = June)
console.log("Declared Date: " + declaredDate.toDateString())

let timestamp = Date.now();
console.log("Timestamp: " + timestamp)
console.log(declaredDate.getMonth()) // can fetch month, date, year, hours, minutes, seconds using get method
// customize or format date using toLocaleString method
console.log(date.toLocaleString('en-IN', { weekday: 'long', timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}))