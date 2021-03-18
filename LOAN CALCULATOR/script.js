// Listen for submit

document.getElementById('loan-form').addEventListener('submit',   function(e){
      document.getElementById('results').style.display = 'none';
      document.getElementById('loading').style.display = 'block';

      setTimeout(calculateResults, 2500)


      e.preventDefault();
});

function calculateResults(){
const amount = document.getElementById('amount');
const interest = document.getElementById('interest')
const years = document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value)/ 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

//Compute Monthly Payments
const x =  Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest) / (x-1);

if(isFinite(monthly)){
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

      // Show results
      document.getElementById('results').style.display = 'block';
      document.getElementById('loading').style.display = 'none';
}
else{ 
      showError("Please, check your numbers");
}
}



function showError(error){
      // Get interacting Elements
      const card = document.querySelector('.card');
      const heading = document.querySelector('.heading');

      // Create  a div
      const errorDiv = document.createElement('div');
      errorDiv.className = 'alert alert-danger';
      errorDiv.appendChild(document.createTextNode(error));

      card.insertBefore(errorDiv, heading);
      // clear Error after 5 seconds 
      setTimeout(clearError, 2500);
      function clearError(){
            document.querySelector('.alert').remove();
      }
}