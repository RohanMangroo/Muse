import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Modal from './components/Modal';
import './styles/shared.css';

function App({ openModal }) {
  const appRef = useRef();

  useEffect(() => {
    if (openModal) {
      appRef.current.style.top = `-${window.pageYOffset}px`;
      appRef.current.style.position = 'fixed';
    } else {
      const scrollY = appRef.current.style.top;
      appRef.current.style.position = '';
      appRef.current.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  });
  return (
    <Router>
      <div ref={appRef} className={openModal ? 'modal-is-open' : ''}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="guest" element={<HomePage />} />
        </Routes>
      </div>
      {openModal && <Modal />}
    </Router>
  );
}

const mapStateToProps = ({ modal }) => {
  return {
    openModal: modal,
  };
};

export default connect(mapStateToProps, null)(App);
