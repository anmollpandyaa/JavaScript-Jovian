console.log(`Welcome! This is Guess The Number game.\nYou have to guess correctly a random computer-generated number.\nYou will be told your number of attempts at the end
    `);

let choice = "y";

do {
    const min = 1;
    const max = 100;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    let guesses = 0;
    let guessedNumber;

    do {
        guessedNumber = Number(prompt("Enter a number between 1 to 100: "));
        guesses++;

        if (guessedNumber > num) console.log("Lower the number");
        else if (guessedNumber < num) console.log("Higher the number");

    } while (guessedNumber !== num);

    console.log(`You guessed the number in ${guesses} guesses!`);
    choice = prompt("Play again? (y/n): ");

} while (choice === "y");

console.log(`
Thanks for playing!`)
