import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../store/currentPageReducer';
import Hero from './Hero';
import Footer from './Footer';
import '../styles/singleArtistView.css';

function SingleArtistView({ updateCurrentPage_ }) {
  useEffect(() => {
    updateCurrentPage_('single-artist');
  });

  return (
    <div className="flex-col single-artist-container">
      <Hero />
      <MainContainer />
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

export default connect(null, mapDispatchToProps)(SingleArtistView);

function MainContainer() {
  return (
    <div className="artist-container flex-col">
      <div className="sub-container one"></div>
      <div className="sub-container two"></div>
      <Footer />
    </div>
  );
}
