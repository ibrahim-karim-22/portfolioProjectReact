import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesArr } from "../app/assets/shared/MoviesMain";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Movies = () => {

    return (
        <Container>
            <Row>
                <Col md='12'>
                    <div className="movies-container">
                        {MoviesArr.map(movie => (
                            <div key={movie.id} className="movie-item">
                                <Link to={`/movie/${movie.id}`}>
                                    <div className='movie-overlay'>
                                        <img className='movies-poster-size mt-5 me-4' src={movie.poster} alt={movie.title} />
                                    </div>
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

export default Movies;
