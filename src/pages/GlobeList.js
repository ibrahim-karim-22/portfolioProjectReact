import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../components/favorites/favoritesSlice';
import { Link } from 'react-router-dom';
import { Globe } from '../app/assets/shared/GlobeMain';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Genre from '../features/Brain/genresToggle';

const LiveGlobe = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const favoriteGlobe = useSelector(state => state.favorites.faveListGlobe);
    const [selectedGenre, setSelectedGenre] = useState('All');

    const isFavorite = (channelId) => {
        return favoriteGlobe.some(channel => channel.id === channelId);
    };

    const handleFavoriteClick = (item, type) => {
        const payload = { item, type };
        if (isFavorite(item.id)) {
            dispatch(removeFromFavorites(payload));
        } else {
            dispatch(addToFavorites(payload));
        }
    };

    const filteredGlobe = selectedGenre === 'All' ? Globe : Globe.filter(channel => channel.genre.includes(selectedGenre));

    return (
        <Container>
            <Row>
                <Genre onSelectGenre={setSelectedGenre} category="Globe" />
            </Row>
            <Row>
                <Col>
                    <div className="globe-container">
                        {filteredGlobe.map(channel => (
                            <div key={channel.id} className="globe-item position-relative">
                                <Link to={`/liveglobe/${channel.id}`} className="globe-link">
                                    <div className="poster-wrapper-globe">
                                        <img className='globe-poster-size' src={channel.poster} alt={channel.name} />
                                        <div className="play-icon-wrapper-globe">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon-globe" />
                                        </div>
                                    </div>
                                    <div className='globe-overlay'></div>
                                </Link>
                                {currentUser && (
                                    <div className='favorite-icon-globe' onClick={() => handleFavoriteClick(channel, 'globe')}>
                                        <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(channel.id) ? 'yellow' : 'white' }} />
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

export default LiveGlobe;
