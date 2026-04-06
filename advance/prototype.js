// we can inject methods to prototype of any class, becomes accessible to all
// if you want to access method to everything (array, object, string), then assign method to object
// object is parent of everything in JS

String.prototype.normalise = function(){
    return this.trim().toLowerCase()
}

let name = "ANMoLl    "
let username = "    ChAyaA   "

console.log(name.normalise())
console.log(username.normalise())