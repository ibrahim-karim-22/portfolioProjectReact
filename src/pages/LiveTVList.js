import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../components/favorites/favoritesSlice';
import { Link } from 'react-router-dom';
import { Channels } from '../app/assets/shared/ChannelsMain';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Genre from '../features/Brain/genresToggle';


const ChannelsList = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const favoriteChannels = useSelector(state => state.favorites.faveListTV);
    const [selectedGenre, setSelectedGenre] = useState('All');

    const isFavorite = (channelId) => {
        return favoriteChannels.some(channel => channel.id === channelId);
    };

    const handleFavoriteClick = (item, type) => {
        const payload = { item, type };
        if (isFavorite(item.id)) {
            dispatch(removeFromFavorites(payload));
        } else {
            dispatch(addToFavorites(payload));
        }
    };

    const filteredChannels = selectedGenre === 'All' ? Channels : Channels.filter(channel => channel.genre.includes(selectedGenre));

    return (
        <Container>

            <Row>
                <Genre onSelectGenre={setSelectedGenre} category="TV" />
            </Row>
            <Row>
                <Col md='12'>
                    <div className="channels-container">
                        {filteredChannels.map(channel => (
                            <div key={channel.id} className="channel-item position-relative">
                                <Link to={`/livetv/${channel.id}`} className="channel-link">
                                    <div className="poster-wrapper-channels">
                                        <img className='channels-poster-size' src={channel.poster} alt={channel.name} />
                                        <div className="play-icon-wrapper-channels">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                    </div>
                                    <div className='channel-overlay'></div>
                                </Link>
                                <div className='city-name mb-5'>{channel.name}</div>
                                {currentUser && (
                                    <div className='favorite-icon-channels' onClick={() => handleFavoriteClick(channel, 'tvChannel')}>
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

export default ChannelsList;
