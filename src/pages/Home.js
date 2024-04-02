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
import cin1 from '../app/assets/images/cin1.png';
import vase from '../app/assets/images/vase.png';
import couch2 from '../app/assets/images/couch2.png';

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
        <div className='vase-par'>
          <Parallax scale={[22, 40]} translateX={[33, -55]} rotate={[15, -5]}>
            <img src={vase} alt='vase' className='vase' />
          </Parallax>
        </div>
        <div className='cin1-par'>
          <Parallax y={[0, -100]} scale={[1, 7]} rotate={[.5, 777]} translateX={[-100, 50]}>
            <div>
              <img src={cin1} alt='cinamon roll' className='cin1' />
            </div>
          </Parallax>
        </div>
        <div className='cin2-par'>
          <Parallax y={[0, -50]} scale={[1, 22]} rotate={[.5, 777]} translateY={[20, -30]}>
            <div>
              <img src={cin1} alt='cinamon roll' className='cin2' />
            </div>
          </Parallax>
        </div>
        <div className='couch2-par'>
          <Parallax y={[0, -50]} scale={[1, 22]} rotate={[-44, 44]} translateY={[20, -30]}>
            <div>
              <img src={couch2} alt='couch' className='couch2' />
            </div>
          </Parallax>
        </div>
        <div className='featmov-text'>
          <Parallax scale={[.1, 1.5]} translateX={[-44, 33]}>
            <h1 className='featured-text mb-5'>Featured</h1>
          </Parallax>
        </div>
        <div className='mov1-par'>
          <Parallax scale={[1, 10]} rotate={[3, -3]} translateX={[55, -33]}>
            <Link to={`/movie/${movie1.id}`}>
              <img src={movie1.poster} alt={movie1.name} className='mov1' />
            </Link>
          </Parallax>
          <Parallax scale={[1, 10]} rotate={[3, -3]} translateX={[-44, 33]}>
            <Link to={`/movie/${movie2.id}`}>
              <img src={movie2.poster} alt={movie2.name} className='mov2' />
            </Link>
          </Parallax>
          <Parallax scale={[1, 15]} rotate={[3, -3]} translateX={[55, -33]}>
            <Link to={`/movie/${movie3.id}`}>
              <img src={movie3.poster} alt={movie3.name} className='mov3' />
            </Link>
          </Parallax>
        </div>
        <div className='featmov-text'>
          <Parallax scale={[.1, 1.5]} translateX={[-44, 5]}>
            <h1 className='featured-text-channels'>Top Channels</h1>
          </Parallax>
        </div>
        <div className='channel1-par'>
          <Parallax scale={[1, 11]} rotate={[-3, 3]} >
            <Link to={`/livetv/${channel3.id}`}>
              <img src={channel3.poster} alt={channel3.name} className='channel1' />
            </Link>
          </Parallax>
          <Parallax scale={[1, 11]} rotate={[-3, 3]} >
            <Link to={`/livetv/${channel2.id}`}>
              <img src={channel2.poster} alt={channel2.name} className='channel1' />
            </Link>
          </Parallax>
          <Parallax scale={[1, 11]} rotate={[-3, 3]} >
            <Link to={`/livetv/${channel1.id}`}>
              <img src={channel1.poster} alt={channel1.name} className='channel1' />
            </Link>
          </Parallax>
        </div>


        <div className='countries-par'>
          <Parallax y={[-33, -55]} scale={[.5, 1.2]}>
            <Container>
              <Row>
                <Col>
                  <h2 className='featured-header'>Locations To Visit</h2>
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
              <Row>
                <Col>
                  <h2 className='featured-header mt-5'>Shape of Stories</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <iframe className='von' width="100%" height="560px" src="https://www.youtube.com/embed/GOGru_4z1Vc?si=6WjHUmsj5tYmeaEP"
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </Col>
              </Row>

            </Container>
          </Parallax>
        </div>
      </ParallaxProvider>
    </>

  );
};

export default Homepage;
