/*
 GAME FUNCTION
-Player must guwess a number between a min and max
- Player gets a certain amount of guesses 
- Notify player of number of guesses remaining
- Notify the player of the correct answer if he looses
-  Let player chooses to play again
*/

// Game Values
let  min = 1,
       max = 10,
       winningNumber = 2,
       gueesesLeft = 3;

  // UI Elements
  const game = document.querySelector('#game');
  const  minNum = document.querySelector('.min-num');
  const maxNum = document.querySelector('.max-num');
  const guessBtn = document.querySelector('#guess-btn');
  const guessInput = document.querySelector('#guess-input');
  const message = document.querySelector('.message');

  // Assign Min and Max    
  minNum.textContent = min;
  maxNum.textContent = max;
 guessBtn.addEventListener('click', function(){
     let guess = parseInt(guessInput.value)

     if(isNaN(guess)|| guess < min || guess > max){
          setMessage(`Please enter a number between ${min} and ${max}`, "red");  }
     
     if(guess === winningNumber){
          guessInput.style.borderColor = 'green'; //Tirns border green
          guessInput.disabled = true; //Disables Input
          setMessage(`${winningNumber} is correct, YOU WIN!`, 'green')
     }
     else {
          gueesesLeft -= 1;
          if(gueesesLeft === 0){

          }
          else{ }
     }


 } ); 

 function setMessage(msg, color){
     message.textContent = msg;
     message.style.color = color;
 }