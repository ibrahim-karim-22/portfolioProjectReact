import React from 'react';
import { Link } from 'react-router-dom';
import { MoviesArr } from "../app/assets/shared/MoviesMain";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Genre from '../features/Brain/genresToggle';


const Movies = () => {
    return (
        <Container>
            <Row>
                <Genre />
            </Row>
            <Row>
                <Col>
                    <div className="movies-container">
                        {MoviesArr.map(movie => (
                            <div key={movie.id} className="movie-item position-relative">
                                <Link to={`/movie/${movie.id}`} className="movie-link">
                                    <div className="poster-wrapper">
                                        <img className='movies-poster-size' src={movie.poster} alt={movie.title} />
                                        <div className="play-icon-wrapper">
                                            <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                                        </div>
                                    </div>
                                    <div className='movie-overlay'></div>
                                    <div className='favorite-icon'>
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

export default Movies;
