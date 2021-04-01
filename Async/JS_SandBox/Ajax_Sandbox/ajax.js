// there are bugs in this application, and i believe it is from my api


document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  const number = document.querySelector(' input[type = "number"] ').value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET",  `https://api.icndb.com/jokes/random${number}`,  true)

  xhr.onload = function(){
      if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output = '';
            if(response.type === 'success'){
                Object.keys( response.value).forEach(function(i){
                        output += `<li>${response.value.joke}</li>`
                }
                )
            }
            else {
                  output += '<li>An error occured!</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
      }
  }

      xhr.send();
      e.preventDefault(); 
}