import React from "react";

export default function MovieCard({ movie }) {
  const handleError = (event) => {
    event.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 4) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <h3 className="movie-card-info">{movie.title}</h3>
      <p className="movie-genre">{movie.genre}</p>
      <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
        {movie.rating}
      </p>
    </div>
  );
}
