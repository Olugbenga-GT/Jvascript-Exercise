class Movie {
      constructor(title, description, producer){
            this.title = title;
            this.description = description;
            this.producer = producer;
      }
}

class UI {

      addMovieToList(movie){
            const list = document.getElementById('movie-list');
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.description}</td>
            <td>${movie.producer}</td>
            <td><a href= "#" class = "delete">X  </td>
            `
            list.appendChild(row)
      }

      showAlert(message, className){
                 // create a div
      const div = document.createElement('div');
      div.className = `alert ${className}`
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#movie-form');
      container.insertBefore(div, form  );
      setTimeout(function(){
            document.querySelector('.alert').remove(); }, 1500);

      }

      deleteMovie(target){
            UI.prototype.deleteMovie = function(target){
                  if(target.className == 'delete'){
                        target.parentElement.parentElement.remove();
                  }
      }
      }

      clearMovieList(){
            document.getElementById('title').value = ' ';
            document.getElementById('description').value = ' ';
            document.getElementById('producer').value = ' ';
      }
}

//Event Listeners
const movieForm = document.getElementById('movie-form');
movieForm.addEventListener('submit' , doThis)

function doThis(e){
      const title =  document.getElementById('title').value;
      const description =  document.getElementById('description').value;
      const producer =  document.getElementById('producer').value;

      const movie = new Movie(title, description, producer) //instantiates Movie
      const ui = new UI(); //Instantiates UI
      console.log(ui)

      // Movie Validation
      if(title == ' ' || description == "" ||  producer == ""){
            // Error Alert
            ui.showAlert("Please, fill in all fields", 'error'); 
      }
      else{
       //Adding Movie  to list
      ui.addMovieToList(movie)
      ui.showAlert('Movie added successfully', 'success')
      //Clearing the movie list
      ui.clearMovieList( )
      }
      e.preventDefault();
}

// Event Listener for Delete
document.getElementById('movie-list').addEventListener('click', function(e){
      const ui = new UI();
      ui.deleteMovie(e.target)
      ui.showAlert('Book removed successfuly', 'success')
})

