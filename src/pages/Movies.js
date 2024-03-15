import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesArr } from "../app/assets/shared/MoviesMain";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Movies = () => {
    // State to store the IDs of movies that are added to favorites
    const [favorites, setFavorites] = useState([]);

    // Function to handle adding a movie to favorites
    const addToFavorites = (movieId) => {
        setFavorites(prevFavorites => [...prevFavorites, movieId]);
    };

    // Function to check if a movie is in favorites
    const isFavorite = (movieId) => {
        return favorites.includes(movieId);
    };

    return (
        <Container>
            <Row>
                <Col md='12'>
                    <div className="movies-container">
                        {MoviesArr.map(movie => (
                            <div key={movie.id} className="movie-item">
                                <Link to={`/movie/${movie.id}`}>
                                    <img className='moviesPosterSize mt-5 me-4' src={movie.poster} alt={movie.title} />
                                </Link>
                                {/* Render the favorites button with conditional styling based on whether the movie is in favorites */}
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={`favorite-icon ${isFavorite(movie.id) ? 'favorite' : ''}`}
                                    onClick={() => addToFavorites(movie.id)}
                                />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Movies;
