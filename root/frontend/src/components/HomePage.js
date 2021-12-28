import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../store/currentPageReducer';
import '../styles/homepage.css';
import Hero from './Hero';
import Main from '../components/Main';

function HomePage({ updateCurrentPage_, openModal }) {
  useEffect(() => {
    updateCurrentPage_('homePage');
  });

  const homePageClassName = `homepage ${openModal ? 'position-fixed' : ''}`;

  return (
    <>
      <div className={homePageClassName}>
        <Hero />
        <Main />
      </div>
    </>
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
