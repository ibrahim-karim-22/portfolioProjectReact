import React, { useState, useEffect, useRef } from 'react';
import { Channels } from '../../app/assets/shared/ChannelsMain';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../components/favorites/favoritesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';



const DisplayTV = () => {
    const { id } = useParams();
    const TVChannel = Channels.find(channel => channel.id === parseInt(id));
    const [selectedChannel, setSelectedChannel] = useState(TVChannel);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const favoriteChannels = useSelector(state => state.favorites.faveListTV);
    const scrollContainerRef = useRef(null);

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
                        <h2 className='channels-text mt-5'>TV Guide</h2>
                        <div className="scroll-arrows">
                            <div className="arrow left" onClick={handleScrollLeft}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                            <div className="arrow right" onClick={handleScrollRight}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                        <div className="tv-guide-scrollable-container" ref={scrollContainerRef}>
                            {Channels.map(channel => (
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
                <Card className='card-main bg-dark'>
                    <CardBody>
                        <CardTitle tag='h1' className='text-warning'>
                            {selectedChannel.name} 
                            </CardTitle>
                            <CardSubtitle tag='h3' className='text-muted'>
                                {selectedChannel.genre.join(', ')}
                                </CardSubtitle>
                            <CardSubtitle tag='h3' className='text-muted mt-1'>{selectedChannel.language}</CardSubtitle>
                                <CardText>  <div className="video-player-section">
                        <div className='channel-display'>
                            <div className='video-container'>
                            <iframe
                                width="100%"
                                height="auto"
                                src={selectedChannel.channel}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                            </div>
                        </div>
                    </div> </CardText>
                    <CardText tag='h4' className='text-light'>
                        {selectedChannel.description}
                    </CardText>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayTV;
