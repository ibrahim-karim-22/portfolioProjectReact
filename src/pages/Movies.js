import React, { useState } from 'react';
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
    const currentUser = useSelector(state => state.user.currentUser);
    const favoriteMovies = useSelector(state => state.favorites.faveList);
    const [selectedGenre, setSelectedGenre] = useState('All');

    const isFavorite = (movieId) => {
        return favoriteMovies.some(movie => movie.id === movieId);
    };

    const handleFavoriteClick = (item, type) => {
        const payload = { item, type };
        if (isFavorite(item.id)) {
            dispatch(removeFromFavorites(payload));
        } else {
            dispatch(addToFavorites(payload));
        }
    };

    const filteredMovies = selectedGenre === 'All' ? MoviesArr : MoviesArr.filter(movie => movie.genre.includes(selectedGenre));

    return (
        <Container>
            <Row>
                <Genre onSelectGenre={setSelectedGenre} category="Movie" />
            </Row>
            <Row>
                <Col>
                    <div className="movies-container">
                        {filteredMovies.map(movie => (
                            <div key={movie.id} className="movie-item position-relative">
                                <Link to={`/movie/${movie.id}`} className="movie-link">
                                    <div className="poster-wrapper">
                                        <img className='movies-poster-size' src={movie.poster} alt={movie.name} />
                                        <div className="play-icon-wrapper">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                    </div>
                                    <div className='movie-overlay'></div>
                                </Link>
                                {currentUser && (
                                    <div className='favorite-icon' onClick={() => handleFavoriteClick(movie, 'movie')}>
                                        <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(movie.id) ? 'yellow' : 'white' }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Movies;
