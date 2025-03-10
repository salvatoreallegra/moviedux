import React from "react";

export default function MovieCard({ movie }) {
  const handleError = (event) => {
    event.target.src = "images/default.jpg";
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
      <p className="movie-card-rating">{movie.rating}</p>
    </div>
  );
}
