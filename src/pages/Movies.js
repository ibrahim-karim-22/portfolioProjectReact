import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../components/favorites/favoritesSlice';
import { Link } from 'react-router-dom';
import { MoviesArr } from "../app/assets/shared/MoviesMain";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Genre from '../features/Brain/genresToggle';


const Movies = () => {
    const dispatch = useDispatch();

    const favoriteMovies = useSelector(state => state.favorites.faveList);

    const isFavorite = (movieId) => {
        return favoriteMovies.some(movie => movie.id === movieId);
    };

    const handleFavoriteClick = (movie) => {
        console.log(movie);
        if (isFavorite(movie.id)) {
            dispatch(removeFromFavorites(movie));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    return (
        <Container>
            <Row>
                <Genre />
            </Row>
            <Row>
                <Col>
                    <div className="movies-container">
                        {MoviesArr.map(movie => (
                            <div key={movie.id} className="movie-item position-relative">
                                <Link to={`/movie/${movie.id}`} className="movie-link">
                                    <div className="poster-wrapper">
                                        <img className='movies-poster-size' src={movie.poster} alt={movie.title} />
                                        <div className="play-icon-wrapper">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                    </div>
                                    <div className='movie-overlay'></div>
                                    <div className='favorite-icon' onClick={() => handleFavoriteClick(movie)}>
                                        <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(movie.id) ? 'yellow' : 'white' }} />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Movies;
