import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { MoviesArr } from "../app/assets/shared/MoviesMain";

const Movies = () => {
    return (
        <div className="movies-container">
            {MoviesArr.map(movie => (
                <Link to={`/movie/${movie.name}`} key={movie.id} className="movie-poster">
                    <img className='moviesPosterSize' src={movie.poster} alt={movie.title} />
                </Link>
            ))}
        </div>
    );
};

export default Movies;
