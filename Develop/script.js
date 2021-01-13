// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var newPassword = ''; 
var allowLowerCase;
var allowUpperCase;
var allowNumerical;
var allowSpecial;
var passwordLength;
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numericChars = "1234567890";
var specialChar = "!@#$%^&*()";
var randomChars = '';
var charIndex;

// allow for lowercase?
do {
var allowLowerCase = confirm("Do you want to allow lowercase characters?");
if (allowLowerCase) {
  randomChars += lowerChars
}

// allow for uppercase?
var allowUpperCase = confirm("Do you want to allow uppercase characters?");
if (allowUpperCase) {
  randomChars += lowerChars.toUpperCase(); 
}

// allow for numerical characters?
var allowNumerical = confirm("Do you want to allow numerical characters?");
if (allowNumerical) {
  randomChars += numericChars; 
}
// allow for special characters?
var allowSpecial = confirm("Do you want to allow special characters?");
if (allowSpecial) {
  randomChars += specialChar; 
}
} while (!allowLowerCase && !allowUpperCase && !allowNumerical && !allowSpecial);

// create the random letters and assign to newPassword
do {
  var passwordLength = parseInt(prompt("How long do you want your password? Must between 8 and 128 characters."));
  } while (!passwordLength || (passwordLength < 8) || (passwordLength > 128));

// Loop through to pick a random character for passwordLength # of times 
// HINT: use a for loop

for(var i = 0; i < passwordLength; i++) {
  // (1) pick a random character from randomChars
charIndex = Math.floor(Math.random() * randomChars.length)
  // (2) assign that to newPassword
  // HINT: String 
newPassword += randomChars.charAt(charIndex);
  // (3) repeat 1 and 2
}

return newPassword;
}  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

