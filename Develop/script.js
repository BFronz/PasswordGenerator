// global variables
var hasStarted = 0;
var passwordLength = 0;



// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(passwordLength,specialChar,numericChar,lowerChar,upperChar) {

  // 4 arrays of possible confirms
  var  specialCharArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ":", ";", "<", "=", ">", "?", "@", "[", "]"];
  var  numericCharArray = [1,2,3,4,5,6,7,8,9,0];
  var  lowerCharArray   = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var  upperCharArray   = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


  // variables
  var allArray = [];
  var counter  = 0;
  var pword    = "";
  var p        = ""; 


  // added arrays selected to the multidimensional array
  if(specialChar == true) {
    allArray.push(specialCharArray)
    counter++;
  } 
 if(numericChar == true) {
    allArray.push(numericCharArray);
    counter++;
  }
  if(lowerChar == true) {
    allArray.push(lowerCharArray);
    counter++;
  }
  if(upperChar == true) {
    allArray.push(upperCharArray);
    counter++;
  }

  //  in case non are selected  
  if (counter == 0) {alert("You must choose some character characteristics");  }

 
  // loop through the password length
  for (var i = 0; i < passwordLength; i++) {

    // get a random index of allArray
    var randomArrIndex = Math.floor(Math.random()  * allArray.length);
  
    // get a random index from the select array
    var randomArrElementIndex = Math.floor(Math.random()  * allArray[randomArrIndex].length);
   
    console.log("pw length: " + passwordLength + " count: " + i + " allArray length:  " + allArray.length  + " random index: " + randomArrIndex + " random element " + randomArrElementIndex);
    console.log("-------------------");

    // get multidimensional array element 
    p = allArray[randomArrIndex][randomArrElementIndex];
  
    pword = pword += p;
    console.log("p: " + p + " pword " + pword);
  }


  return pword;

}




// Write password to the #password input
function writePassword() {


  passwordLength = prompt("How many characters would you like you password to contain?");
   
  // logic for password lenght
  if (passwordLength < 8 ) {
    alert("You must choose a length of at least 8 characters");    
  } 
  else if (passwordLength > 128){
    alert("You must choose a length not more that 128 characters");    
  } 
  else {
    console.log("length: " + passwordLength);

    // get commit inupts
    specialChar = confirm("Click OK to confirm to include special characters.");  
    console.log("special: " + specialChar);

    numericChar = confirm("Click OK to confirm to include numeric characters.");  
    console.log("numeric: " + numericChar);
 
    lowerChar = confirm("Click OK to confirm to include lowercase characters.");  
    console.log("lower: " + lowerChar);

    upperChar = confirm("Click OK to confirm to include uppercase characters.");  
    console.log("upper: " + upperChar);
    console.log("-------------------");

    // call function
    var password = generatePassword(passwordLength,specialChar,numericChar,lowerChar,upperChar);
    
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


