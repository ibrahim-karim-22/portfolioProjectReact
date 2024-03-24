import React from 'react';
import { Link } from 'react-router-dom';
import { Channels } from '../app/assets/shared/ChannelsMain';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const ChannelsList = () => {
    return (
        <Container>
            <Row>
                <Col md='12'>
                    <div className="channels-container">
                        {Channels.map(channel => (
                            <div key={channel.id} className="channel-item position-relative">
                                <Link to={`/livetv/${channel.name}`} className="channel-link">
                                    <div className="poster-wrapper-channels">
                                        <img className='channels-poster-size' src={channel.poster} alt={channel.name} />
                                        <div className="play-icon-wrapper-channels">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                    </div>
                                    <div className='channel-overlay'></div>
                                    <div className='favorite-icon-channels'>
                                        <FontAwesomeIcon icon={faStar} />
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

export default ChannelsList;
