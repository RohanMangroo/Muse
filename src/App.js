import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Modal from './components/Modal';
import './styles/shared.css';

function App({ openModal }) {
  const appRef = useRef();

  useEffect(() => {
    if (openModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  });

  return (
    <Router>
      <div ref={appRef} className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
