import React from 'react';
import { connect } from 'react-redux';
import '../styles/navBar.css';
import iconMenu from '../resources/Icon_menu.svg';
import { updateLeftSection } from '../store/leftSectionReducer';

function NavBar({ leftSection, updateLeftSection_ }) {
  function handleClick() {
    updateLeftSection_(!leftSection);
  }

  return (
    <div>
      <nav>
        <div onClick={() => handleClick()}>
          <img src={iconMenu} alt="menu" className="search-menu-button"></img>
        </div>
        <div className="nav-links">
          <ul>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = ({ leftSection }) => {
  return {
    leftSection: leftSection.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLeftSection_: (boolean) => {
      return dispatch(updateLeftSection(boolean));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
