import { Channels } from '../../app/assets/shared/ChannelsMain';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// Array of movie IDs that you want to include in the carousel
const selectedChannelIds = [1, 2, 3];

function ChannelsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === selectedChannels.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? selectedChannels.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Filter MoviesArr based on selectedMovieIds
  const selectedChannels = Channels.filter(channel => selectedChannelIds.includes(channel.id));

  const slides = selectedChannels.map((channel, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img src={channel.poster} alt={channel.title} 
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
        items={selectedChannels}
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

export default ChannelsCarousel;
