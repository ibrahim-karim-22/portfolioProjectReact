import React from 'react';
import { useParams } from 'react-router-dom';
import { MoviesArr } from "../../app/assets/shared/MoviesMain";
import { Container, Row, Col, CardBody, Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../components/favorites/favoritesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const DisplayMovie = () => {
    const { id } = useParams();
    const movie = MoviesArr.find(movie => movie.id === parseInt(id));
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const favoriteMovie = useSelector(state => state.favorites.faveList);
    

    const isFavorite = (movieId) => {
        return favoriteMovie.some(movie => movie.id === movieId)
    };

    const handleFavoriteClick = (movie, type) => {
        const payload = { item: movie, type };
        if (isFavorite(movie.id)) {
            dispatch(removeFromFavorites(payload));
        } else {
            dispatch(addToFavorites(payload));
        }
    };


    if (!movie) {
        return <div>Error</div>;
    }



    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='movie-name-text'>{movie.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <video className='display-movie' width="70%" height="auto" controls>
                        <source src={movie.video} type="video/mp4" />
                        Your browser does not support this video type.
                    </video>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className='card-main bg-black'>
                        <CardBody>
                            <Row>
                                <Col lg='7'>
                                    <img className='movies-display-poster mb-3' src={movie.poster} alt={movie.title} /> 
                                </Col>
                                <Col >
                                    
                                    <CardTitle tag="h1" className='text-warning'>
                                {movie.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-light"
                                tag="h3"
                            >
                                    {movie.year}
                                   
                            </CardSubtitle>
                            <CardSubtitle className='text-muted' tag='h4'>
                                 Director: <p className='text-light'>{movie.director}</p>
                            </CardSubtitle>
                            <CardSubtitle className='text-muted mt-1' tag='h4'>
                            Cast: <p className='text-light'>{movie.cast.join(', ')}</p>
                            </CardSubtitle>
                            <CardText className='text-muted mt-3' tag='h4'>
                               Plot: <p className='text-light'>{movie.plot}</p>
                            </CardText>
                            <CardText className='text-muted mt-1' tag='h4'>
                              Trivia:  <p className='text-light'>{movie.trivia}</p> 
                            </CardText>    
                            </Col>
                            </Row>
                            {currentUser && (
                            <Row>
                            <Col>
                                    <div className='favorite-icon' onClick={() => handleFavoriteClick(movie, 'movie')}>
                                        <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(movie.id) ? 'yellow' : 'white'}} />
                                    </div>
                                </Col>
                            </Row>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayMovie;
