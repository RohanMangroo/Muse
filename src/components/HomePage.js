import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../store/currentPageReducer';
import '../styles/homepage.css';
import heroImage from '../resources/PaulCezanne6.jpg';

function HomePage({ updateCurrentPage_ }) {
  useEffect(() => {
    updateCurrentPage_('homePage');
  });

  return (
    <div>
      <Hero />
      <Main />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentPage_: (page) => {
      return dispatch(updateCurrentPage(page));
    },
  };
};

export default connect(null, mapDispatchToProps)(HomePage);

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container"></div>
      <figure>
        <img className="hero-image" src={heroImage} alt="hero"></img>
      </figure>
    </div>
  );
}

function Main() {
  return (
    <main className="main-container flex-col">
      <div className="top flex-row">
        <section className="main-left flex-col">
          <div className="featured-artist-container flex-col">
            <header></header>
            <div className="sub-container flex-row">
              <div className="featured-artist flex-col">
                <div className="featured-artist-img"></div>
                <div className="featured-artist-description"></div>
              </div>
              <div className="featured-artist flex-col">
                <div className="featured-artist-img"></div>
                <div className="featured-artist-description"></div>
              </div>
            </div>
            <div className="unknown-section"></div>
          </div>
        </section>
        <section className="main-right flex-col">
          <div className="random-art flex-col">
            <header></header>
            <section>{createSection()}</section>
          </div>
        </section>
      </div>
      <div className="search flex-row">
        <section className="results">
          <div></div>
          <div className="related-results">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section className="search-form">
          <div></div>
        </section>
      </div>
      <div className="gallery"></div>
    </main>
  );
}

function createSection() {
  const array = [];
  for (let i = 0; i < 9; i++) {
    array.push(
      <div className="flex-col" key={uuidv4()}>
        <div></div>
        <div></div>
      </div>
    );
  }
  return array;
}
