// Write a function addWithSubcharge that adds two amounts with subcharge. For each amount less than or equal to 10, the subcharge is 1. For each amount greater than 10, the subcharge is 2.

function addWithSubcharge(){
      let subCharge;
firstCharge = Number(prompt(' Input your initial charge'))
secondCharge = Number(prompt("Input your second charge"))

if(firstCharge <=  10){
      subCharge = 1;
      firstCharge+= subCharge}
else{
      subCharge = 2
      firstCharge+=subCharge}

   
  if(secondCharge <=  10){
            subCharge = 1;
            secondCharge+= subCharge}
 else{
            subCharge = 2
            secondCharge+=subCharge}     
            
            return document.write("Your total  charge is  $"+ `${firstCharge + secondCharge} ` + ". You incured $" + `${subCharge}` + " on each charge." )
}

addWithSubcharge()