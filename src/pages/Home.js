import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { MoviesArr } from '../app/assets/shared/MoviesMain';
import { Channels } from '../app/assets/shared/ChannelsMain';
import { Globe } from '../app/assets/shared/GlobeMain';
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';
// import anime from 'animejs';


const Homepage = () => {
  const movie1 = MoviesArr[2];
  const movie2 = MoviesArr[3];
  const movie3 = MoviesArr[5];

  const channel1 = Channels[0];
  const channel2 = Channels[10];
  const channel3 = Channels[12];

  const globe1 = Globe[1];
  const globe2 = Globe[2];
  const globe3 = Globe[3];


  return (
    <ParallaxProvider>
      <div className='featmov-text'>
        <Parallax scale={[.1, 1.5]}>
          <h1 className='featured-text'>Featured</h1>
        </Parallax>
      </div>
      <div className="featmov">
        <div className="featured-movie-container1">
          <Parallax   scale={[1, 4]}   rotate={[0, -7]}>
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
          <Parallax   scale={[1, 8]}   rotate={[0, -11]}>
            <Link to={`/livetv${channel1.name}`}>
              <img src={channel1.poster} alt={channel1.name} className='featured-channel-poster1' />
            </Link>
          </Parallax>
        </div>
        <div className="featured-channel-container2 me-5">
          <Parallax scale={[1, 8]} >
            <Link to={`/livetv`}>
              <img src={channel2.poster} alt={channel2.name} className='featured-channel-poster2' />
            </Link>
          </Parallax>
        </div>

        <div className="featured-channel-container3">
          <Parallax scale={[1, 8]} rotate={[1, 11]} >
            <Link to={`/livetv`}>
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
          <Parallax   scale={[1, 8]}   rotate={[0, -11]}>
            <Link to={`/liveglobe/${globe1.id}`}>
              <img src={globe1.poster} alt={globe1.name} className='featured-channel-poster1' />
            </Link>
          </Parallax>
        </div>
        <div className="featured-channel-container2 me-5">
          <Parallax scale={[1, 8]} >
            <Link to={`/liveglobe/${globe2.id}`}>
              <img src={globe2.poster} alt={globe2.name} className='featured-channel-poster2' />
            </Link>
          </Parallax>
        </div>

        <div className="featured-channel-container3">
          <Parallax scale={[1, 8]} rotate={[1, 11]} >
            <Link to={`/liveglobe/${globe3.id}`}>
              <img src={globe3.poster} alt={globe3.name} className='featured-channel-poster3' />
            </Link>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Homepage;
