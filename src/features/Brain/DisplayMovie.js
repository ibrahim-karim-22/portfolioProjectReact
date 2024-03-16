import React from 'react';
import { useParams } from 'react-router-dom';
import { MoviesArr } from "../../app/assets/shared/MoviesMain";
import { Container, Row, Col } from 'reactstrap'; // Assuming you're using Reactstrap

const DisplayMovie = () => {
    const { id } = useParams();

    // Find the movie with the matching ID from the MoviesArr array
    const movie = MoviesArr.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{movie.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col md='3'>
                    <img className='movies-poster-size' src={movie.poster} alt={movie.title} />
                </Col>
                <Col md='3'>
                    <p>Release Date: <br /> {movie.year} <br /> Plot: <br />{movie.plot}</p>
                </Col>
                <Col md='3'>
                    <p>Trivia: <br />{movie.trivia}</p>
                </Col>
                <Col md='1'>
                    <p>Director: {movie.director}</p>
                </Col>
                <Col md='1'>
                    <p>Duration: {movie.duration}</p>
                </Col>
                <Col md='1'>
                    <p>Cast <br />{movie.cast}</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <video className='display-movie' width="1200" height="800" controls>
                        <source src={movie.video} type="video/mp4" />
                        Your browser does not support this video type.
                    </video>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayMovie;
