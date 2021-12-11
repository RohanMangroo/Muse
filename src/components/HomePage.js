import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import '../styles/homePage.css';
import images from '../resources/images';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="main-container">
        <section className="left-section">LEFT</section>
        <section className="right-section">
          <div className="grid-container">
            <div>
              <img src={images.pC1} alt="joan"></img>
            </div>
            <div>
              <img src={images.pC2} alt="joan"></img>
            </div>
            <div>
              <img src={images.pC3} alt="joan"></img>
            </div>
            <div>
              <img src={images.pC4} alt="joan"></img>
            </div>
            <div>
              <img src={images.pC5} alt="joan"></img>
            </div>
            <div>
              <img src={images.pC6} alt="joan"></img>
            </div>
            <div>
              <img src={images.pC7} alt="joan"></img>
            </div>
            <div>
              <img src={images.pC8} alt="joan"></img>
            </div>
            <div>
              <img src={images.main2} alt="joan"></img>
            </div>
            <div>
              <img src={images.pP1} alt="joan"></img>{' '}
            </div>
            <div>
              <img src={images.to50} alt="joan"></img>
            </div>
            <div>
              <img src={images.vangogh} alt="joan"></img>
            </div>
            <div>
              <img src={images.women} alt="joan"></img>
            </div>
            <div>
              <img src={images.main1} alt="joan"></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
