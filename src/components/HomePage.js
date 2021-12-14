import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../store/currentPageReducer';
import '../styles/homepage.css';
import '../styles/homepage-right.css';
import '../styles/mediaQueries.css';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

function HomePage({ updateCurrentPage_ }) {
  useEffect(() => {
    updateCurrentPage_('homePage');
  });
  return (
    <div className="homepage-container">
      <div className="main-container">
        <LeftSection />
        <section className="right-section">
          <div className="grid-container">
            <RightSection />
          </div>
        </section>
      </div>
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
