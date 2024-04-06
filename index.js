#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Wellcome in my number guessing game");
const answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1 and 10 : ",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! You guessed a correct number.");
}
else {
    console.log("Try Again, you guessed a wrong number");
}
console.log("THE END");
