function formatRating(rating) {
    let rounded = Math.round(rating)
    let floor = Math.floor(rating)
    let ceil = Math.ceil(rating)
    
    return{
        rounded,
        floor,
        ceil
        
    }
}

console.log(formatRating(4.6))