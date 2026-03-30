// for of loop does not require us to initialize, check length or increement
// best to use when we just want to iterate through an array or string

const names = ['Anmol', 'Chaya', 'Jaydeep', 'Shanaya']
for(let n of names){
    console.log(n);
}

const name = 'Anmol Pandya'
for(let n of name){
    if (n === ' ') {
        continue
    }
    console.log(n);
}

// for in loop is used to map through object
// by default it return keys unlike for of loop, so while using with array we need to print names[n]
const course = {
    name: 'Complete JavaScript Full Stack Development Course',
    duration: '50+ hours',
    instructor: 'Anmol Pandya',
    fees: 8000
}

for (const key in course) {
    console.log(`${key}: ${course[key]}`);
    
}