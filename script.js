var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(){
// Write all your code here.
// Pseudocode
// Present user series of prompts/confirms
    // let sign = prompt("What's your sign?");
    // length prompt - var lengthChoice
    var lengthChoice = prompt(" Please choose a length between 8-128 characters.")
    // confirm("Press a button!");
    // lower confirm - var lowerChoice
    // upper confirm - var upperChoice
    // nums confirm - var numsChoice
    // special confirm - var SpcChoice
// length prompt / number between 8 - 128
    // if/conditional check if length is between 8-128
        //  if true continue to confirms. false ask length again
// confirm for lower, upper, nums, special
// Input Validation - correct nums, atleast 1 character chosen
    // if/conditional check using || true continue to generate, false ask confirm again
// Randomly generate password string from choices
    // arrays of lower, upper, nums, special
    // array of all chosen characters, concat?
    // choose from the all options arr number of chars required(length prompt)
        // For loop, run based on length prompt
        // Math.random choose index postions from arrayS
            // var foodItems = ["Bannana", "Apple", "Orange"];
            // var theFood = foodItems[Math.floor(Math.random() * foodItems.length)];
        // grab from chosen array, add to password array
        // convert array to string
        // return string
        // alert with password to the screen
// display password in text box- write to page
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);