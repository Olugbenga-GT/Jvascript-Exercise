// 9 - Write a simple JavaScript program to join all elements of the
// following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// *** Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


  function joinArray(array){

        document.write(array.join());
      
  }

  let myColor = ["Red", "Green", "White", "Black"];
  joinArray(myColor)

function concatWithPlus(array){

      for(let i = 0; i < array.length; i++){
           array += array.concat("+")
      }
      document.write(array)
}

concatWithPlus(myColor)