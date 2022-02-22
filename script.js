var generateBtn = document.querySelector("#generate");

// Character variables
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "!@,#$%&*{}[]/\\+=";
let chosenChars = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(){
    var lengthChoice = prompt(" Please choose a length between 8-128 characters.")
// display password in text box- write to page
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);