import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../store/currentPageReducer';
import '../styles/homepage.css';
import Model from './Model';
import Hero from './Hero';
import Main from '../components/Main';

function HomePage({ updateCurrentPage_, openModel }) {
  useEffect(() => {
    updateCurrentPage_('homePage');
  });

  const homePageClassName = `homepage ${openModel ? 'position-fixed' : ''}`;

  return (
    <>
      <div className={homePageClassName}>
        <Hero />
        <Main />
      </div>
      {openModel && <Model />}
    </>
  );
}

const mapStateToProps = ({ model }) => {
  return {
    openModel: model,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentPage_: (page) => {
      return dispatch(updateCurrentPage(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
