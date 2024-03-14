import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { MoviesArr } from "../app/assets/shared/MoviesMain";
import { Container, Row, Col } from 'reactstrap';

const Movies = () => {
    return (
        <Container>
            <Row>
                <Col md='12'>
                    <div className="movies-container">
                        {MoviesArr.map(movie => (
                            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-poster">
                                <img className='moviesPosterSize mt-5 me-4' src={movie.poster} alt={movie.title} />
                            </Link>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Movies;
