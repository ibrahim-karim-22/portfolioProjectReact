import React, { useState } from 'react';
import { Channels } from '../../app/assets/shared/ChannelsMain';
import { Container, Row, Col } from 'reactstrap';

const DisplayTV = () => {
    const [selectedChannel, setSelectedChannel] = useState(Channels[0]);

    const handleChannelClick = (channel) => {
        setSelectedChannel(channel);
    };
console.log(selectedChannel.channel)
    return (
        <Container>
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
                    <p>{selectedChannel.description} </p>
                    <p>{selectedChannel.language}</p>
                    <p>{selectedChannel.genre}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="tv-guide-section">
                        <h2 className='channels-text mt-5'>TV Guide</h2>
                        <div className="tv-guide-scrollable-container">
                            {Channels.map(channel => (
                                <img
                                    key={channel.id}
                                    className='channels-poster-size-in-display mt-5 me-3 '
                                    src={channel.poster}
                                    alt={channel.title}
                                    onClick={() => handleChannelClick(channel)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayTV;
