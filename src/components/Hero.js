import React, { useState } from 'react';
import { heroImages } from '../utils';
import '../styles/hero.css';

export default function Hero() {
  const [index, setIndex] = useState(0);

  function handleClickForward(array) {
    const newIndex = index === array.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  }

  function handleClickBackward(array) {
    const newIndex = index === 0 ? array.length - 1 : index - 1;
    setIndex(newIndex);
  }
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImages[index]})` }}
    >
      <div
        className="carousel-btn btn-left center-item"
        onClick={() => handleClickForward(heroImages)}
      >
        <span className="carousel-left pointer"></span>
      </div>
      <div
        className="carousel-btn btn-right center-item"
        onClick={() => handleClickBackward(heroImages)}
      >
        <span className="carousel-right pointer"></span>
      </div>
    </div>
  );
}
