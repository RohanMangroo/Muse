import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../store/currentPageReducer';
import '../styles/homepage.css';

import Hero from './Hero';
import Main from '../components/Main';

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
