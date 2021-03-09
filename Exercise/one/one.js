// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkForFifty(){
firstNumber =  Number (prompt("Please, enter your first Number"));
secondNumber = Number ( prompt("Please, enter second     Number"));

if  ((firstNumber + secondNumber) == 50 ||  firstNumber == 50 || secondNumber == 50 ){ 
       alert('TRUE')
      }
else  {  alert("FALSE")}
}

checkForFifty();