import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Channels } from "../app/assets/shared/ChannelsMain";
import { Container, Row, Col } from 'reactstrap'; // Import Container, Row, Col from Reactstrap

const LiveTV = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="movies-container"> {/* Same class name as the example */}
                        {Channels.map(channel => (
                            <Link to={`/livetv/${channel.name}`} key={channel.id} className="movie-poster"> {/* Same class name as the example */}
                                <img className='channelsPosterSize mt-5 me-5' src={channel.poster} alt={channel.title} /> {/* Same class name as the example */}
                            </Link>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LiveTV;
