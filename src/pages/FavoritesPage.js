import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../components/favorites/favoritesSlice';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const FavoritesPage = () => {
    const dispatch = useDispatch();

    const favoriteMovies = useSelector(state => state.favorites.faveList);

    const favoriteTV = useSelector(state => state.favorites.faveListTV);

    const handleRemoveFavorite = (item, type) => {
        dispatch(removeFromFavorites({item, type}));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Favorite Movies</h2>
                    <div className='favorites-list'>
                        {favoriteMovies.map(movie => (
                            <div key={movie.id} className='favorite-item'>
                                <img src={movie.poster} alt={movie.name} />
                                <span>{movie.name}</span>
                                <button onClick={() => handleRemoveFavorite(movie, 'movie')}>
                                    Remove from Favorites
                                </button>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Favorite TV Channels</h2>
                    <div className='favorites-list'>
                        {favoriteTV.map(channel => (
                          <div key={channel.id} className='favorite-item'>
                            <img src={channel.poster} alt={channel.name} />
                            <button onClick={() => handleRemoveFavorite(channel, 'tvChannel')}>
                                Remove from Favorites
                            </button>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

    export default FavoritesPage;