// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var LowCase = 'abcdefghijklmnopqrstuvwxyz'
var NumberChart = '0123456789'
var SpecCha = '!@#$%^&*(){}=<>,.'



function generatePassword() {


var Randomlist = ""
//   prompt for passsword criteria
//  prompt for the length of the password 8~128
//  lowercase, uppercase, number, special Character
 var string_passlength = prompt ("Please choose the length of of your password (8 ~ 128)");

if (string_passlength < 8 || string_passlength > 128) {
  alert ("Invalid input, please try again!")
  return generatePassword()
}

if (confirm("Would you like to include Uppercase in your password?")) {
  Randomlist += uppCase 
}

if (confirm("Would you like to include Lowercase in your password?")) {
  Randomlist += LowCase
}

if (confirm("Would you like to include Special Characters in your password?")) {
  Randomlist += SpecCha 
}

if (confirm("Would you like to include Numbers in your password?")) {
  Randomlist += NumberChart 
}

if (Randomlist === "") {
  alert ("Invalid input, please try again!")
  return generatePassword()
}

//  generate password base on input
    
        retVal = "";
    for (var i = 0; i < string_passlength; ++i) {
        retVal += Randomlist.charAt(Math.floor(Math.random() * Randomlist.length));
    }
    return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);