import React, { useState } from 'react';
import { Channels } from '../../app/assets/shared/ChannelsMain';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../components/favorites/favoritesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


const DisplayTV = () => {
    const { id } = useParams();
    const TVChannel = Channels.find(channel => channel.id === parseInt(id));
    const [selectedChannel, setSelectedChannel] = useState(TVChannel);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const favoriteChannels = useSelector(state => state.favorites.faveListTV);

    if (!TVChannel) {
        return <div>Error</div>
    }

    const handleChannelClick = (channel) => {
        setSelectedChannel(channel);
    };

    const isFavorite = (channelId) => {
        return favoriteChannels.some(channel => channel.id === channelId);
    };

    const handleFavoriteClick = (channel, type) => {
        const payload = { item: channel, type };
        if (isFavorite(channel.id)) {
            dispatch(removeFromFavorites(payload));
        } else {
            dispatch(addToFavorites(payload));
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className="tv-guide-section">
                        <h2 className='channels-text mt-5'>TV Guide</h2>
                        <div className="tv-guide-scrollable-container">
                            {Channels.map(channel => (
                                <div key={channel.id} className="channel-item position-relative">
                                    <div className='channel-link'>
                                    <div className="poster-wrapper-channels" onClick={() => handleChannelClick(channel)}>
                                        <img className='channels-poster-size' src={channel.poster} alt={channel.name} />
                                        <div className="play-icon-wrapper-channels">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                        <div className='channel-overlay'></div></div>
                                        {currentUser && (
                                            <div className='favorite-icon-channels' onClick={() => handleFavoriteClick(channel, 'tvChannel')}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(channel.id) ? 'yellow' : 'white'}} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="video-player-section mt-5">
                        <h2 className='channels-text'>{selectedChannel.name}</h2>
                        <div className='channel-display'>
                            <iframe
                                width="560"
                                height="315"
                                src={selectedChannel.channel}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </Col>
                <Col className='mt-5'>
                    <p>{selectedChannel.description}</p>
                    <p>{selectedChannel.language}</p>
                    <p>{selectedChannel.genre}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayTV;
