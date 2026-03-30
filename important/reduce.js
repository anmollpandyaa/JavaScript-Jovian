// reduce is used to add all values in an array or similar operations
// example: adding all items in a cart

const prices = [299, 499, 899, 400, 299, 199]

const total = prices.reduce((acc, curr) => acc + curr, 0)
console.log(total)

// acc refers to last value, curr refers to current value in array. ,0 is initialization of acc

const cart = [
    {
        item: 'Greek Yogurt',
        price: 70
    },
    {
        item: 'Energy Bar',
        price: 100
    },
    {
        item: 'Diet Coke',
        price: 40
    },
    {
        item: 'Eggs',
        price: 80
    },
    {
        item: 'Whole Wheat Bread',
        price: 80
    },
    {
        item: 'Cheese',
        price: 150
    }
]

const bill = cart.reduce((acc, item) => item.price + acc, 0)
console.log(bill > 500 
    ? 'more than pocket money' 
    : 'confirm ordering'
);
