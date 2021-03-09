// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function trippleSameInteger(){

firstNumber =  Number (prompt("Please, enter your first Number"));
secondNumber = Number ( prompt("Please, enter second     Number"));

if (firstNumber === secondNumber){
      return document.write(3 * (firstNumber + secondNumber))
}
else {
      return document.write(firstNumber + secondNumber)
}
}

trippleSameInteger()