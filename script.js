var generateBtn = document.querySelector("#generate");

// Character variables
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChars = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
let chosenChars = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(){

    let lengthChoice = prompt(" Please choose a length between 8-128 characters.")
// display password in text box- write to page
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);