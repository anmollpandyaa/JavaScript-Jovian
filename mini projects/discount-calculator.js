function calculateDiscountedPrice(price, discount) {
    let discountedPrice = price - price * (discount / 100)
    return discountedPrice.toFixed(2)
}

console.log(calculateDiscountedPrice(999.99, 15))