import React from 'react';
import heroImage from '../resources/PaulCezanne6.jpg';
import '../styles/hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container"></div>
      <figure>
        <img className="hero-image" src={heroImage} alt="hero"></img>
      </figure>
    </div>
  );
}
