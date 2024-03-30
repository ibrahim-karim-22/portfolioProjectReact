import React, { useState, useRef } from 'react';
import { Globe } from '../../app/assets/shared/GlobeMain';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../components/favorites/favoritesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const DisplayGlobe = () => {
    const { id } = useParams();
    const GlobeChannel = Globe.find(channel => channel.id === parseInt(id));
    const [selectedGlobeChannel, setSelectedGlobeChannel] = useState(GlobeChannel);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const favoriteGlobe = useSelector(state => state.favorites.faveListGlobe);
    const scrollContainerRef = useRef(null);


    if (!GlobeChannel) {
        return <div>Error</div>
    }
    

const handleChannelClick = (channel) => {
    setSelectedGlobeChannel(channel);
};

    const isFavorite = (channelId) => {
        return favoriteGlobe.some(channel => channel.id === channelId);
    };

    const handleFavoriteClick = (channel, type) => {
        const payload = { item: channel, type };
        if (isFavorite(channel.id)) {
            dispatch(removeFromFavorites(payload));
        } else {
            dispatch(addToFavorites(payload));
        }
    };

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 1250;
        }
    };
    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 1250; 
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="tv-guide-section">
                        <h2 className='channels-text mt-5'>Globe Guide</h2>
                        <div className="scroll-arrows">
                            <div className="arrow left" onClick={handleScrollLeft}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                            <div className="arrow right" onClick={handleScrollRight}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                        <div className="tv-guide-scrollable-container" ref={scrollContainerRef}>
                            {Globe.map(channel => (
                                <div key={channel.id} className="channel-item position-relative">
                                    <div className='channel-link'>
                                    <div className="poster-wrapper-channels" onClick={() => handleChannelClick(channel)}>
                                        <img className='channels-poster-size' src={channel.poster} alt={channel.name} />
                                        <div className="play-icon-wrapper-channels">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                        <div className='channel-overlay'></div></div>
                                        <div className='city-name'>{channel.name}</div>
                                        {currentUser && (
                                            <div className='favorite-icon-channels' onClick={() => handleFavoriteClick(channel, 'globe')}>
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
                        <h2 className='channels-text'>{selectedGlobeChannel.name}</h2>
                        <div className='channel-display-globe'>
                            <iframe
                                width="760"
                                height="427"
                                src={selectedGlobeChannel.channel}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayGlobe;
