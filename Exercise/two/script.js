// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// function checkForPositives(){
//       firstNumber =  prompt("Enter first Number");
//       secondNumber = prompt("Enter second Number");

//       if(firstNumber  > 0 && secondNumber > 0) {
//             alert ("Both numbers are positive")
//       }
//       else if (firstNumber < 0 || secondNumber < 0){
//             alert("One of your number is  negative")
//       }
//       else {
//             alert("Both your numbers are negatives")
//       }

//       checkForPositives();
// }


function checkForPositives () {
      firstNumber =   parseInt (prompt("Enter first number"))  
      secondNumber =parseInt( prompt("Enter second Number"))

      if(firstNumber  > 0 && secondNumber > 0) {
            alert ("Both numbers are positive")
      }
      else if (firstNumber < 0 || secondNumber < 0){
            alert("One of your number is  negative")
      }
      else {
            alert("Both your numbers are negatives")
      }


}

checkForPositives();