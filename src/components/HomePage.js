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
    <main className="main-container flex-row">
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
        </div>
        <div className="search">
          <div className="result"></div>
          <div className="related-item"></div>
          <div className="related-item"></div>
          <div className="related-item"></div>
        </div>
        <div className="discover-more"></div>
      </section>
      <section className="main-right flex-col">
        <div className="random-art flex-col">
          <header></header>
          <section>{createSection()}</section>
        </div>
        <div className="search-selections flex-col">
          <header></header>
          <section></section>
        </div>
        <div className="video"></div>
      </section>
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
