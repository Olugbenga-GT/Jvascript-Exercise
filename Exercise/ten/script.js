// 10 - Write a JavaScript program to compute the sum and product of
// an array of integers.

function calculateSumAndProduct(array){

      var i;
      let sum  = 0
      let product = 1

document.write("Your array is "+ array  +"\n")
 for(i =  0;  i < array.length; i++   ){
            sum+=array[i]
            product*= array[i]
 }

 return document.write("The sum of numbers in your array is  \n" + sum + ".  while their product is " +  product)
}

let numbers = [4, 5,11,6,4,9,3,7]
calculateSumAndProduct(numbers)