new Promise(function(resolve, reject){
    let a = 10
    let b = 90

    let c = a + b
    console.log(c);
    resolve()
}).then(function () {
    console.log("executed");
})