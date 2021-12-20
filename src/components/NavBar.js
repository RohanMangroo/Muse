import React from 'react';
import { connect } from 'react-redux';
import '../styles/navBar.css';

function NavBar({ currentPage }) {
  const display = currentPage === 'landingPage' ? 'display-none' : '';

  return (
    <div className={`nav-container ${display}`}>
      <nav>
        <div className="center-item logo">MUSE</div>
        <ul>
          <li>
            <div className="center-item">Artists</div>
          </li>
          <li>
            <div className="center-item">My Page</div>
          </li>
          <li>
            <div className="center-item">About</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = ({ currentPage }) => {
  return {
    currentPage: currentPage.currentPage,
  };
};

export default connect(mapStateToProps, null)(NavBar);
