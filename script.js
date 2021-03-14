//start the code
//putting in the user input variables or declaring variables in arrays

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// start variable values for password:
// special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// space is for the Uppercase conversion
space= [];
// choices declared outside the if statement to be concatenated upon condition
var choices;
// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//This starts a function to generate a password
function generatePassword() {
// prompts user and ask for input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  if(!enter) {
    alert("This needs a value");
  }else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {

    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
};

// Else if for 4 negative options
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");

}
// First if statement that uses user input prompts to determine choices
// Else if for 4 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  choices = character.concat(number, alpha, alpha2);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alpha2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alpha, alpha2);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
  choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
// Else if for 1 positive option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};

// password variable is an array placeholder for user generated amount of length
var password = [];

// Start random selection variables:
// Random selection for all variables: 
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
// This joins the password array and converts it to a string
// Worked with a tutor to incorporate this option
var ps = password.join("");
UserInput(ps);
return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
document.getElementById("password").textContent = ps;

}


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
// var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
// var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
// var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
//   arrayFromLowToHigh(58, 64)
// ).concat(
//   arrayFromLowToHigh(91, 96)
// ).concat(
//   arrayFromLowToHigh(123, 126) 
// )
// //test
// function arrayFromLowToHigh(low, high) {
//   var array = []
//   for (let i= low; i <= high; i++ ) {
//     array.push(i)
//   }
//   return array
// }


//1. User clicks a button to generate a password
//use eventlistener


//2. After the user clicks a series of prompts for password criteria will be presented
   //useprompt function with confirm?

//3. The alerts will consist of choices.

//

//choice 1 - length of password min 8 max 128
//choice 2 - prompt for charactertype
       // - lowercase, uppercase, numeric, and /or special characters

//4. After user answers each prompt 
//4.1 Then users answers will be validated
//4.2 User MUST pick Length and MUST pick one charactertype

//5. A password is generated and written to the page inside text BhxBrowser


