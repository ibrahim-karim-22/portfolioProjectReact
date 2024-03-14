import { MoviesArr } from "../../app/assets/shared/MoviesMain";
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// Array of movie IDs that you want to include in the carousel
const selectedMovieIds = [1, 2, 3];

function MoviesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === selectedMovies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? selectedMovies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Filter MoviesArr based on selectedMovieIds
  const selectedMovies = MoviesArr.filter(movie => selectedMovieIds.includes(movie.id));

  const slides = selectedMovies.map((movie, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img src={movie.poster} alt={movie.title} 
        className="movies-carousel-item" />
      <CarouselCaption
        
      />
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      Carousel={"dark-carousel"}
      style={{ textAlign: 'center', position: 'relative' }}
    >
      <CarouselIndicators
        items={selectedMovies}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
       className="prevArrow1"
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        className="nextArrow1"
       
      />
    </Carousel>
  );
}

export default MoviesCarousel;
