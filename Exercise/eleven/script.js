// 1. Write a function called sandwich calculator. This should accept one value:
// slicesOfBread
// 2. The function should return the total number of possible sandwiches based
// on the amount of slices available, so if there are 10 slices, it should return
// 5. Test your function with an alert box.
// 3. Extend your function so it accepts two values, slicesOfBread and
// slicesOfCheese.
// 4. It takes two slices of bread and one of cheese to make a sandwich. The
// function should return the total number of possible sandwiches, so if there
// are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need
// an if statement to make this work.

let sandwich = 0;

function sandwichCalculator(){
           let  slicesOfBread = Number(prompt("How many slices of bread are there ?"))
            let sandwich = Math.trunc(slicesOfBread / 2)
            return alert("You can only make " + sandwich + " sandwiches")
      }
      sandwichCalculator()
      

function sandwichCalculatorPro(){
    let  slicesOfBread = Number(prompt("How many slices of bread are there ?"))
    let slicesOfCheese= Number(prompt("How many slices of cheese are there ?"))

    if(slicesOfBread / slicesOfCheese >= 1){
          for(;  sandwich <= slicesOfCheese; sandwich++){
                slicesOfBread-=2;
            //     slicesOfCheese-=1;
          }

          document.write("You can only make " + (sandwich - 1) + " sandwich(es), and there will be " + (slicesOfBread  + 2)+ " slice(s) of  bread left")
    }
    else{document.write("Your cheese is waay more than bread, you cant make no sandwich Fam!")}

}

sandwichCalculatorPro()