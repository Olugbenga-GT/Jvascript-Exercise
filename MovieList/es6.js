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
                  }  }
      }

      clearMovieList(){
            document.getElementById('title').value = ' ';
            document.getElementById('description').value = ' ';
            document.getElementById('producer').value = ' ';
      }
}


// DOING LOCAL STORAGE

class Store{
      static getMovies(){
            let movies ;
            if(localStorage.getItem('movies') == null){
                  movies = [];
            }
            else{
                  movies = JSON.parse(localStorage.getItem('movies'));
            }
            return movies;
      }
      static displayMovie(){ 
            const movies = Store.getMovies();
            movies.forEach(function(movie){
                  const ui = new UI;
                  ui.addMovieToList(movie);
            })

      }

      static addMovie(movie){
            const movies = Store.getMovies();
            movies.push(movie)
            localStorage.setItem('movies', JSON.stringify(movies))

      }

      static removeMovie(producer){
            const movies = Store.getMovies();
            movies.forEach(function(movie){
                 if(movie.producer == producer){
                       movies.splice(index, 1)
                 }
            });
            localStorage.setItem('movies', JSON.stringify(movies))

      }
}

// To Show books stored in the Local Storage in the UI.
document.addEventListener('DOMContentLoaded', Store.displayMovie)

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

      // Adding Movie to Local Storage
      Store.addMovie(movie)
     
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

      // Removing (Deleting book from the LS)
      Store.removeMovie(e.target.parentElement.previousElementSibling.textContent)

      ui.showAlert('Book removed successfuly', 'success')
})

