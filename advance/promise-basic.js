new Promise(function(resolve, reject){
    let a = 10
    let b = 90

    let c = a + b
    console.log(c);
    resolve()
}).then(function () {
    console.log("executed");
})

// we can also pass data from a promise
new Promise(function(resolve, reject){
    resolve({username: "@anmollpandyaa", designation: "CEO of Procrastination"})
}).then(function(user){
    console.log(user);
})