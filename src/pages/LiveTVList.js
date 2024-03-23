import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Channels } from '../app/assets/shared/ChannelsMain';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ChannelsList = () => {

    return (
        <Container>
            <Row>
                <Col md='12'>
                    <div className="movies-container">
                        {Channels.map(channel => (
                            <div key={channel.id} className="movie-item">
                                <Link to={`/livetv/${channel.name}`}>
                                    <img className='movies-poster-size mt-5 me-4' src={channel.poster} alt={channel.name} />
                                </Link>
                                {/* <FontAwesomeIcon icon={faStar} /> */}
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ChannelsList;
