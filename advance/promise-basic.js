new Promise(function (resolve, reject) { // creating a promise
    let a = 10
    let b = 90

    let c = a + b
    console.log(c);
    resolve()
}).then(function () {                    // consuming a promise
    console.log("executed")
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
    console.log(response)
}).catch(function (issue) {
    console.log(issue)
}).finally(function () {
    console.log("Task Finished")
})

// we can also consume a promise using async await, or can just do .then .catch like above

const newPromise = new Promise(function(resolve, reject){
    let problem = true

    if(!problem) resolve({status: "good"})
    else reject({status: "bad"})
})

async function consumeNewPromise(){
    try {
        const response = await newPromise
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumeNewPromise()