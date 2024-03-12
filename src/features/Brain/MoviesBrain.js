import React from 'react';
import { MoviesArr } from '../../app/assets/shared/MoviesMain';

const MoviesArrayRender = () => {

  return (
    <div>
      {MoviesArr.map(movie => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <p>Year: {movie.year}</p>
          <img src={movie.poster} alt={movie.name} width='223px' />
          <video width="320" height="240" controls>
            <source src={movie.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Display other movie details here */}
          <p>Director: {movie.director}</p>
          <p>Genre: {movie.genre.join(', ')}</p>
          <p>Cast: {movie.cast.join(', ')}</p>
          <p>Plot: {movie.plot}</p>
          <p>Duration: {movie.duration}</p>
          <p>Shooting Locations: {movie.shootingLocations.join(', ')}</p>
          <p>Release Date: {movie.releaseDate}</p>
          <ul>
            {movie.trivia.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MoviesArrayRender;
