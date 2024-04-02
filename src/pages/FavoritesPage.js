import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavorites } from '../components/favorites/favoritesSlice';
import { Container, Row, Col, Alert } from 'reactstrap';
import { faCircleMinus, faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectCurrentUser } from '../components/Login/userSlice';


const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favoriteMovies = useSelector(state => state.favorites.faveList);
    const favoriteTV = useSelector(state => state.favorites.faveListTV);
    const favoriteGlobe = useSelector(state => state.favorites.faveListGlobe);
    const currentUser = useSelector(selectCurrentUser);
    const hasFavorites = favoriteMovies.length > 0 || favoriteTV.length > 0 || favoriteGlobe.length > 0;

    const handleRemoveFavorite = (item, type) => {
        dispatch(removeFromFavorites({ item, type }));
    };

    const userName = currentUser ? currentUser.username : '';

    //    if (!currentUser) { 
    //     return redirect("/");
    //    }

    return (
        <Container>
            {!hasFavorites && (
                <Alert className='mt-5 bg-warning text-dark'>
                    <h4 className="alert-heading">
                        {userName}! Welcome to Favorites!
                    </h4>
                    <p>
                        Currently you haven't added anything.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Click the on the <FontAwesomeIcon icon={faStar} style={{ color: 'gray' }} /> to favorite!
                    </p>
                </Alert>
            )}
            {favoriteMovies.length > 0 && (
                <Row>
                    <Col>
                        <h2 className='favorite-headers'>Movies</h2>
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
            )}
            {favoriteTV.length > 0 && (

                <Row>
                    <Col>
                        <h2 className='favorite-headers mt-4'>TV</h2>
                        <div className='channels-container'>
                            {favoriteTV.map(channel => (
                                <div key={channel.id} className='channel-item position-relative'>
                                    <Link to={`/livetv/${channel.id}`} className='channel-link'>
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
                                    <div onClick={() => handleRemoveFavorite(channel, 'tvChannel')}>
                                        <FontAwesomeIcon icon={faCircleMinus} style={{ color: 'red'}} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

            )}
            {favoriteGlobe.length > 0 && (
                <Row>
                    <Col>
                        <h2 className='favorite-headers'>Globe</h2>
                        <div className='channels-container'>
                            {favoriteGlobe.map(channel => (
                                <div key={channel.id} className='channel-item position-relative'>
                                    <Link to={`/liveGlobe/${channel.id}`} className='channel-link'>
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
            )}
        </Container>
    );
};

export default FavoritesPage;
