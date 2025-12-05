import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ amount, imageSet, className = "carousel-wrapper" }) => {
  const CARD_COUNT = amount; // Number of cards
  const [activeIndex, setActiveIndex] = useState(2);
  const carouselRef = useRef(null);

  if (imageSet[0] == undefined) {
    for (let k = 0; k <= amount - 1; k++) {
      imageSet[k] = `${k}`;
    }
  }

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + CARD_COUNT) % CARD_COUNT);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % CARD_COUNT);
  };

  const items = Array.from({ length: CARD_COUNT }, (_, i) => i);

  return (
    <div className={className}>
      <button className="carousel-btn prev" onClick={goToPrev}>
        &#10094;
      </button>
      <div className="carousel" ref={carouselRef}>
        {items.map((i) => {
          const offset = i - activeIndex;
          const abs = Math.abs(offset);
          const scale = 1 - abs * 0.1;
          const rotateY = offset * -6;
          const blur = abs * 1;
          const opacity = abs > 2 ? 0 : 1;

          return (
            <div
              className="carousel-item"
              key={i}
              style={{
                transform: `translate(-50%, -50%)
                 translateX(${offset * 70}px)
                 scale(${scale})
                 rotateY(${rotateY}deg)`,
                zIndex: 100 - abs,
                opacity: opacity,
              }}
            >
              <div className="cards-carousel">
                <img src={`${imageSet[i]}.jpg`} alt={`Car ${i + 1}`} />
              </div>
            </div>
          );
        })}
      </div>
      <button className="carousel-btn next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
