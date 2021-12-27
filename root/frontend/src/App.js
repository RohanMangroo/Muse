import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import './styles/shared.css';

function App({ openModel }) {
  const dynamicClass = `App ${openModel ? 'overflow-hidden' : ''}`;
  return (
    <Router>
      <div className={dynamicClass}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="guest" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = ({ model }) => {
  return {
    openModel: model,
  };
};

export default connect(mapStateToProps, null)(App);
