import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { Channels } from '../app/assets/shared/ChannelsMain';
import { MoviesArr } from '../app/assets/shared/MoviesMain';
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';

const Homepage = () => {
  const featuredMovieIds = [3, 12, 22, 33, 2, 4];
  const featuredTVIds = [4, 6, 8, 11, 5, 12];

  const featuredMovies = featuredMovieIds.map(id => MoviesArr.find(movie => movie.id === id));
  const featuredTVs = featuredTVIds.map(id => Channels.find(channel => channel.id === id));

  return (
    <ParallaxProvider>
      <div className="homepage">
        <Container>
          <Row>
            <Col md={6}>
            <h1 className='featured-text'>Featured Films</h1>
              <Parallax y={[-20, 20]} x={[-20, 20]} scale={[1, 1.5]} opacity={[1, 0]} rotate={[-10, 10]} blur={[0, 5]}>
                <div className="featured-movies-container">
                  {featuredMovies.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                      <img src={movie.poster} alt={movie.name} className='featured-movie-poster' />
                    </Link>
                  ))}
                </div>
                
              </Parallax>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
            <h1 className='featured-text'>Featured Channels</h1>
              <Parallax y={[-20, 20]} x={[-20, 20]} scale={[1, 1.5]} opacity={[1, 0]} rotate={[-10, 10]} blur={[0, 5]}>
                <div className="featured-tvs-container">
                  {featuredTVs.map(tv => (
                    <Link key={tv.id} to={`/livetv/${tv.name}`}>
                      <img src={tv.poster} alt={tv.name} className='featured-channel-poster' />
                    </Link>
                  ))}
                </div>
              </Parallax>
            </Col>
          </Row>
        </Container>
      </div>
    </ParallaxProvider>
  );
};

export default Homepage;
