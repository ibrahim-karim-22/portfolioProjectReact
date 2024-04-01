import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { MoviesArr } from '../app/assets/shared/MoviesMain';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../components/favorites/favoritesSlice';
import { Channels } from '../app/assets/shared/ChannelsMain';
import { Globe } from '../app/assets/shared/GlobeMain';
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// import anime from 'animejs';




const Homepage = () => {
  const movie1 = MoviesArr[2];
  const movie2 = MoviesArr[3];
  const movie3 = MoviesArr[5];

  const channel1 = Channels[0];
  const channel2 = Channels[4];
  const channel3 = Channels[12];

  const globe1 = Globe[1];
  const globe2 = Globe[2];
  const globe3 = Globe[4];

  const currentUser = useSelector(state => state.user.currentUser);
  const favoriteMovies = useSelector(state => state.favorites.faveList);
  const dispatch = useDispatch();

  const isFavorite = (movieId) => {
    return favoriteMovies.some(movie => movie.id === movieId);
  };

  const handleFavoriteClick = (item, type) => {
    const payload = { item, type };
    if (isFavorite(item.id)) {
      dispatch(removeFromFavorites(payload));
    } else {
      dispatch(addToFavorites(payload));
    }
  };
  



  return (
    <>
      <ParallaxProvider>
        <div className='featured-container'>
          <div className='featmov-text'>
            <Parallax scale={[.1, 1.5]} >
              <h1 className='featured-text'>Featured</h1>
            </Parallax>
          </div>
          <div className="featmov">
            <div className="featured-movie-container1">
              <Parallax scale={[1, 4]} rotate={[0, -7]}>
                <Link to={`/movie/${movie1.id}`}>
                  <img src={movie1.poster} alt={movie1.name} className='featured-movie-poster1' />
                </Link>
              </Parallax>
            </div>
            <div className="featured-movie-container2">
              <Parallax scale={[1, 3]} >
                <Link to={`/movie/${movie2.id}`}>
                  <img src={movie2.poster} alt={movie2.name} className='featured-movie-poster2' />
                </Link>
              </Parallax>
            </div>

            <div className="featured-movie-container3">
              <Parallax scale={[1, 4]} rotate={[1, 4]}>
                <Link to={`/movie/${movie3.id}`}>
                  <img src={movie3.poster} alt={movie3.name} className='featured-movie-poster3' />
                </Link>
              </Parallax>
            </div>
          </div>


          <div className='featchannel-text'>
            <Parallax scale={[.1, 1.5]}>
              <h1 className='featured-text'>Top Channels</h1>
            </Parallax>
          </div>
          <div className="featchannel">
            <div className="featured-channel-container1 me-5">
              <Parallax scale={[1, 4]} rotate={[0, -11]}>
                <Link to={`/livetv/${channel1.id}`}>
                  <img src={channel1.poster} alt={channel1.name} className='featured-channel-poster1' />
                </Link>
              </Parallax>
            </div>
            <div className="featured-channel-container2 me-5">
              <Parallax scale={[1, 4]} >
                <Link to={`/livetv/${channel2.id}`}>
                  <img src={channel2.poster} alt={channel2.name} className='featured-channel-poster2' />
                </Link>
              </Parallax>
            </div>

            <div className="featured-channel-container3">
              <Parallax scale={[1, 4]} rotate={[1, 11]} >
                <Link to={`/livetv/${channel3.id}`}>
                  <img src={channel3.poster} alt={channel3.name} className='featured-channel-poster3' />
                </Link>
              </Parallax>
            </div>
          </div>


          <div className='featchannel-text'>
            <Parallax scale={[.1, 1.5]}>
              <h1 className='featured-text'>Countries to Visit</h1>
            </Parallax>
          </div>
          <div className="featchannel">
            <div className="featured-channel-container1 me-5">
              <Parallax scale={[1, 4]} rotate={[0, -11]}>
                <Link to={`/liveglobe/${globe1.id}`}>
                  <img src={globe1.poster} alt={globe1.name} className='featured-channel-poster1' />
                </Link>
              </Parallax>
            </div>
            <div className="featured-channel-container2 me-5">
              <Parallax scale={[1, 4]} >
                <Link to={`/liveglobe/${globe2.id}`}>
                  <img src={globe2.poster} alt={globe2.name} className='featured-channel-poster2' />
                </Link>
              </Parallax>
            </div>

            <div className="featured-channel-container3">
              <Parallax scale={[1, 4]} >
                <Link to={`/liveglobe/${globe3.id}`}>
                  <img src={globe3.poster} alt={globe3.name} className='featured-channel-poster3' />
                </Link>
              </Parallax>
            </div>
          </div>
        </div>
      </ParallaxProvider>
      <Container className='phone-container'>
        <Row>
          <Col>
            <h2 className='featured-header mt-3'>Featured</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/movie/${movie1.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={movie1.poster} alt={movie1.name} className='phone-poster-size' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(movie1, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(movie1.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/movie/${movie2.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={movie2.poster} alt={movie2.name} className='phone-poster-size' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(movie2, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(movie2.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/movie/${movie3.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={movie3.poster} alt={movie3.name} className='phone-poster-size' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(movie3, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(movie3.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className='featured-header mt-3'>Top Channels</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/livetv/${channel1.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={channel1.poster} alt={channel1.name} className='phone-poster-size-channels' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(channel1, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(channel1.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/livetv/${channel2.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={channel2.poster} alt={channel2.name} className='phone-poster-size-channels' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(channel2, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(channel2.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/livetv/${channel3.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={channel3.poster} alt={channel3.name} className='phone-poster-size-channels' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(channel3, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(channel3.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className='featured-header mt-3'>Locations To Visit</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/liveglobe/${globe1.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={globe1.poster} alt={globe1.name} className='phone-poster-size' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(globe1, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(globe1.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/liveglobe/${globe2.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={globe2.poster} alt={globe2.name} className='phone-poster-size' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(globe2, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(globe2.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className='phone-img-container'>
              <div className='phone-img-item'>
                <Link to={`/liveglobe/${globe3.id}`} className='phone-link'>
                  <div className='phone-poster-wrapper'>
                    <img src={globe3.poster} alt={globe3.name} className='phone-poster-size' />
                    <div className='phone-play-wrapper'>
                      <FontAwesomeIcon icon={faPlayCircle} className='phone-play-icon' />
                    </div>
                  </div>
                  <div className='phone-overlay'></div>
                </Link>
                {currentUser && (
                  <div className='phone-favorite-icon' onClick={() => handleFavoriteClick(globe3, 'movie')}>
                    <FontAwesomeIcon icon={faStar} style={{ color: isFavorite(globe3.id) ? 'yellow' : 'white' }} />
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default Homepage;
