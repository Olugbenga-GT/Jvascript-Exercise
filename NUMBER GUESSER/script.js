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
       winningNumber = Math.ceil(Math.random() * 10),
       guessesLeft = 3;

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

  game.addEventListener('mousedown',  function(e){
      if(e.target.className === 'play-again'){
            window.location.reload();
      }
  })   

     if(isNaN(guess)|| guess < min || guess > max){
          setMessage(`Please enter a number between ${min} and ${max}`, "red");  }
     
     if(guess === winningNumber){
          gameOver(true, `${winningNumber} is correct, YOU WIN!`, 'green');  
     }
     else {
          guessesLeft -= 1;
          // Wrong Number
          if(guessesLeft === 0){
               gameOver(false, ` Game Over, you lost. The correct number was ${winningNumber} `)
          }
          else{ 
               // Game Continues, Altho' wrong answer
                    setMessage(`${guess} is incorrect. ${guessesLeft} guesses left`, 'red')
          }
     }
 } ); 

 function setMessage(msg, color){
     message.textContent = msg;
     message.style.color = color;
 }


 function gameOver(won, msg){
      let color;
      won === true ? color = 'green' : 'red'
     guessInput.style.borderColor =  color 
     message.style.color =  color 
     guessInput.disabled = true; //Disables Input
     setMessage(msg)

     // Play Again
     guessBtn.value = 'Play Again';
     guessBtn.className += 'play-again';
 }

