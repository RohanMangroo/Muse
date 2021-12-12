import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/homePage.css';
import images from '../resources/images';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="main-container">
        <section className="left-section">
          <div className="info-container">
            <ArtworkInfo />
            <Buttons />
          </div>
          <div className="search-form"></div>
        </section>
        <section className="right-section">
          <div className="grid-container">
            <ImageGallary />
          </div>
        </section>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <button>Add to Favorites</button>
      <button>Artist Wiki</button>
    </div>
  );
}
function ArtworkInfo() {
  return (
    <div className="artwork-info">
      <h1 className="title">Self-Portrait</h1>
      <div className="name-year-country">
        <h2 className="artist-name">Vincent van Gogh</h2>
        <h3 className="year">1887</h3>
        <h3 className="country">French</h3>
      </div>
      <SimpleBar className="scroll">
        <div className="description">
          <p>
            Born into an upper-middle-class family, Van Gogh drew as a child and
            was serious, quiet, and thoughtful. As a young man, he worked as an
            art dealer, often traveling, but became depressed after he was
            transferred to London.
          </p>
          <p>
            He turned to religion and spent time as a Protestant missionary in
            southern Belgium. He drifted in ill health and solitude before
            taking up painting in 1881, having moved back home with his parents.
            His younger brother Theo supported him financially; the two kept a
            long correspondence by letter.
          </p>
        </div>
      </SimpleBar>
    </div>
  );
}

function ImageGallary() {
  return (
    <>
      {images.map((image) => {
        return (
          <figure key={uuidv4()}>
            <img className="opacity-low" src={image} alt="test"></img>
          </figure>
        );
      })}
    </>
  );
}
