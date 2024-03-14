// MovieDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on ID
    // Example:
    // fetch(`/api/movies/${id}`)
    //   .then(response => response.json())
    //   .then(data => setMovie(data));
    // Replace this with actual fetching logic
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.name}</h2>
      <p>Year: {movie.year}</p>
      {/* Render other movie details here */}
    </div>
  );
};

export default MovieDetails;
