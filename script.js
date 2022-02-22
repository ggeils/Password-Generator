var generateBtn = document.querySelector("#generate");

// Character variables
let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChars = [
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
];
let resultChars = [];

let confirmUpper;
let confirmLower;
let confirmNumber;
let confirmSpecial;
let userChoice;


function generatePassword() {
  let lengthChoice = prompt("Please choose a length between 8-128 characters.");
  console.log("Chosen length: " + lengthChoice);

  if (lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = prompt("You must choose a length between 8-128 characters!");
  } else {
    confirmLower = confirm(
      "Would you like your password to contain lower case letters?"
    );
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm(
      "Would you like your password to contain upper case letters?"
    );
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Would you like your password to contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm(
      "Would you like your password to contain special characters?"
    );
    console.log("Special Character " + confirmSpecial);
  }

  if (
    !confirmNumber &&
    !confirmSpecial &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    choices = alert("You must choose at least one criteria!");
    // All options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoice = lowerCase.concat(upperCase, numbers, specialChars);
    console.log(userChoice);
    // Three options
  } else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoice = upperCase.concat(numbers, specialChars);
    console.log(userChoice);
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoice = lowerCase.concat(upperCase, specialChars);
    console.log(userChoice);
  } else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoice = lowerCase.concat(numbers, specialChars);
    console.log(userChoice);
  } else if (confirmLower && confirmUpper && confirmNumber) {
    userChoice = lowerCase.concat(upperCase, numbers);
    console.log(userChoice);
    // Two options
  } else if (confirmLower && confirmSpecial) {
    userChoice = lowerCase.concat(specialChars);
    console.log(userChoice);
  } else if (confirmNumber && confirmSpecial) {
    userChoice = numbers.concat(specialChars);
    console.log(userChoice);
  } else if (confirmLower && confirmUpper) {
    userChoice = lowerCase.concat(upperCase);
    console.log(userChoice);
  } else if (confirmUpper && confirmNumber) {
    userChoice = upperCase.concat(numbers);
    console.log(userChoice);
  } else if (confirmUpper && confirmSpecial) {
    userChoice = upperCase.concat(specialChars);
    console.log(userChoice);
  } else if (confirmLower && confirmNumber) {
    userChoice = lowerCase.concat(numbers);
    console.log(userChoice);
  }
  // One option
  else if (confirmLower) {
    userChoice = lowerCase;
    console.log(userChoice);
  } else if (confirmUpper) {
    userChoice = upperCase
    console.log(userChoice);
  } else if (confirmNumber) {
    userChoice = numbers;
    console.log(userChoice);
  } else if (confirmSpecial) {
    userChoice = special;
    console.log(userChoice);
  }

  for (let i = 0; i < lengthChoice; i++) {
    let allChoices = userChoice[Math.floor(Math.random() * userChoice.length)];
    resultChars.push(allChoices);
    console.log(allChoices);
  }
  let password = resultChars.join("");
  console.log("Your generated password is: " + password);
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

writePassword();
