// Write a function toArray that takes 5 values and returns these values in an array.

function toArray (){
      let str = 0;
      for(let count = 0 ; count < 5; count++){
            number = prompt("Enter number")
            str += number;
      }
            array = Array.from(str)
            return document.write(array)
}

toArray()