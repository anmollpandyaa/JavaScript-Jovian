// this is a higher order loop, knows pretty much things already
// has access to three properties: item, index and arr (name can vary, sequence is fixed)

const furniture = ['table', 'bed', 'side table', 'shoe rack']

// we pass a callback inside for each, so it has no name
// as we are already performing loop on a specific array or object, we do not need to explicitly pass it
furniture.forEach(function(item) {
    console.log(item);
    
})

console.log("------------------------");

furniture.forEach((item, index) => {
    console.log(`Index of ${item} is ${index}`);
    
})

console.log("------------------------");

// we can also directly pass a function inside for each
function printName(i, j){
    console.log(i, j)
}

furniture.forEach(printName)

console.log("------------------------");

// this is how we can loop through array of objects, and can access specific data as well
const team = [
{
    name: 'Anmoll Pandya',
    socials: '@anmollpandyaa',
    age: 22,
    interests: ['Geopolitics', 'Social Media']
},
{
    name: 'Chaya Jargurjar',
    socials: '@chayaa',
    age: 21,
    interests: ['Social Media', 'Literature']
}
]

team.forEach((item) => {
    console.log(item.socials);
})

// for each loop never returns anything, even if used return keyword or stored in a variable