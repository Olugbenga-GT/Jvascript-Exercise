// Write a JavaScript program to find the area of a scalene triangle where lengths of the three of its sides are 5, 6, 7.

function calculateArea(){

      a = parseInt (prompt("Enter first lenth of your triangle"))  
      b = parseInt (prompt("Enter second lenth of your triangle"))  
      c = parseInt (prompt("Enter third lenth of your triangle"))  

      let perimeter = 0.5 * (a + b + c);
      let area = Math.sqrt(perimeter * (perimeter-a) *( perimeter - b) * (perimeter - c)).toFixed(2)

      return alert ( "The area of your scalene triangle with sides " +`${a} , ${b} and ${c}` + " is " + area)
}

calculateArea()