new Promise(function (resolve, reject) { // creating a promise
    let a = 10
    let b = 90

    let c = a + b
    console.log(c);
    resolve()
}).then(function () {                    // consuming a promise
    console.log("executed");
})

// we can also pass data from a promise
new Promise(function (resolve, reject) {
    resolve({ username: "@anmollpandyaa", designation: "CEO of Procrastination" })
}).then(function (user) {
    console.log(user);
})

// creating a promise with resolve and reject
new Promise(function (resolve, reject) {
    let error = false

    if (!error) resolve({ success: "pass" })
    else reject({ success: "fail" })
}).then(function (response) {
    console.log(response);
}).catch(function (issue) {
    console.log(issue)
}).finally(function () {
    console.log("Task Finished")
})
