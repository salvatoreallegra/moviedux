import React,{useState, useEffect} from "react";
import "../styles.css";


export default function MoviesGrid() {

const [movies, setMovies] = useState([]);
useEffect(() => {
    fetch('/movies.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();  // ✅ Properly parsing JSON
        })
        .then(data => setMovies(data))
        .catch(error => console.error('Error fetching movies:', error));
}, []); 

  return (
    <div className="movies-grid">
      {
      movies.map(movie => (

        <div key={movie.id} className="movie-card">
          <img src={`images/${movie.image}`} alt={movie.title} />
          <h3 className="movie-card-info">{movie.title}</h3>
          <p className="movie-genre">{movie.genre}</p>
          <p className="movie-card-rating">{movie.rating}</p>
        </div>
      ))
      }
    </div>
  );
}
