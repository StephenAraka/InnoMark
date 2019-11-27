import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';

// import agric1 from '../../assets/img/main/agric.png';
import agric2 from '../../assets/img/main/agric2.jpg';
import agric3 from '../../assets/img/main/agric3.jpg';
import agric4 from '../../assets/img/main/agric4.jpg';
import educ1 from '../../assets/img/main/educ.jpeg';
import educ2 from '../../assets/img/main/educ2.jpg';
import finance1 from '../../assets/img/main/finance2.jpg';
import health1 from '../../assets/img/main/health.jpg';
import random from '../../assets/img/main/random.png';


const items = [
  {
    // src: 'https://via.placeholder.com/1600x600/92d4a6?text=Slide+Pic+Three'
    src: finance1
  },
  {
    // src: 'https://via.placeholder.com/1600x600/92d4a6?text=Slide+Pic+Three'
    src: agric3
  },
  {
    // src: 'https://via.placeholder.com/1600x600/92d4a6?text=Slide+Pic+Three'
    src: educ1
  },
  {
    // src: 'https://via.placeholder.com/1600x600/92d4a6?text=Slide+Pic+Three'
    src: educ2
  },
  {
    // src: 'https://via.placeholder.com/1600x600/92d4a6?text=Slide+Pic+Three'
    src: health1
  },
  {
    // src: 'https://via.placeholder.com/1600x600/a6d492?text=Slide+Pic+Two'
    src: agric2
  },
  {
    // src: 'https://via.placeholder.com/1600x600/cad492?text=Slide+Pic+One'
    src: agric4
  },
  {
    // src: 'https://via.placeholder.com/1600x600/92d4a6?text=Slide+Pic+Three'
    src: random
  }
];

const SlidePics = (/*props*/) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carousel-container"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-pic" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="carousel-parent"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
};

export default SlidePics;