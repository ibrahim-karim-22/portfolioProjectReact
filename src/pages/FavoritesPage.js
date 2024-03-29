import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavorites } from '../components/favorites/favoritesSlice';
import { Container, Row, Col } from 'reactstrap';
import { faCircleMinus, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favoriteMovies = useSelector(state => state.favorites.faveList);
    const favoriteTV = useSelector(state => state.favorites.faveListTV);
    const favoriteGlobe = useSelector(state => state.favorites.favelistGlobe);

    const handleRemoveFavorite = (item, type) => {
        dispatch(removeFromFavorites({ item, type }));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className='favorite-headers'>Favorite Movies</h2>
                    <div className='movies-container'>
                        {favoriteMovies.map(movie => (
                            <div key={movie.id} className='movie-item position-relative'>
                                    <Link to={`/movie/${movie.id}`} className='movie-link'>
                                        <div className='poster-wrapper'>
                                        <img src={movie.poster} alt={movie.name} className='movies-poster-size' />
                                        <div className="play-icon-wrapper">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                        </div>
                                        <div className='movie-overlay'></div>
                                    </Link>
                                    <div onClick={() => handleRemoveFavorite(movie, 'movie')} className='remove-favorite-button'>
                                        <FontAwesomeIcon icon={faCircleMinus} style={{ color: 'red' }} />
                                    </div>
                                </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='favorite-headers'>Favorite Channels</h2>
                    <div className='channels-container'>
                        {favoriteTV.map(channel => (
                            <div key={channel.id} className='channel-item position-relative'>
                                <Link to={`/livetv/:id`} className='channel-link'>
                                    <div className='poster-wrapper-channels'>
                                            <img src={channel.poster} alt={channel.name} className='channels-poster-size' />
                                            <div className='play-icon-wrapper-channels'>
                                                <FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
                                            </div>
                                        </div>
                                        <div className='channel-overlay'></div>
                                </Link>
                                <div onClick={() => handleRemoveFavorite(channel, 'tvChannel')} className='remove-favorite-button'>
                                    <FontAwesomeIcon icon={faCircleMinus} style={{ color: 'red' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='favorite-headers'>Favorites from Globe</h2>
                    <div className='channels-container'>
                        {favoriteGlobe.map(channel => (
                            <div key={channel.id} className='channel-item position-relative'>
                                <Link to={`/liveGlobe/:id`} className='channel-link'>
                                    <div className='poster-wrapper-channels'>
                                            <img src={channel.poster} alt={channel.name} className='channels-poster-size' />
                                            <div className='play-icon-wrapper-channels'>
                                                <FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
                                            </div>
                                        </div>
                                        <div className='channel-overlay'></div>
                                </Link>
                                <div onClick={() => handleRemoveFavorite(channel, 'globe')} className='remove-favorite-button'>
                                    <FontAwesomeIcon icon={faCircleMinus} style={{ color: 'red' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FavoritesPage;
