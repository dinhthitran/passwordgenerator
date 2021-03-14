





















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







//1. User clicks a button to generate a password


//2. After the user clicks a series of prompts for password criteria will be presented
   

//3. The alerts will consist of choices.

//choice 1 - length of password min 8 max 128
//choice 2 - prompt for charactertype
       // - lowercase, uppercase, numeric, and /or special characters

//4. After user answers each prompt 
//4.1 Then users answers will be validated
//4.2 User MUST pick Length and MUST pick one charactertype

//5. A password is generated and written to the page inside text BhxBrowser


