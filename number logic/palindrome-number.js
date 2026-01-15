const num = 222

function isPalindrome(number) {
    const original = number
    let remainder;
    let reversed = 0;
    
    while (number > 0){
        remainder = number % 10;
        reversed = reversed * 10 + remainder;
        number = Math.floor(number / 10);
    }
    
    return reversed == original
}

console.log(isPalindrome(num) ? "Palindrome" : "Not Palindrome")