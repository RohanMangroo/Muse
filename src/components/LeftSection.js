import React, { useState } from 'react';
import { connect } from 'react-redux';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import mag from '../resources/Icon.svg';
import '../styles/homepage-left.css';

function LeftSection({ leftSection }) {
  const menu = leftSection ? 'left-section close' : 'left-section open';

  return (
    <section className={menu}>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="artwork-info-container">
        <ArtworkInfo />
        <Buttons />
      </div>
    </section>
  );
}

const mapStateToProps = ({ leftSection }) => {
  return {
    leftSection: leftSection.open,
  };
};

export default connect(mapStateToProps, null)(LeftSection);

function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <form>
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <span>
          <img src={mag} alt="mag"></img>
        </span>
      </div>
    </form>
  );
}

function ArtworkInfo() {
  return (
    <div className="artwork-info">
      <h1 className="title">Self-Portrait</h1>
      <div className="name-year-country">
        <h2 className="artist-name">Vincent van Gogh</h2>
        <h3 className="year">1887</h3>
        <h3 className="country">French</h3>
      </div>
      <SimpleBar className="simplebar">
        <div className="description">
          <p>
            Born into an upper-middle-class family, Van Gogh drew as a child and
            was serious, quiet, and thoughtful. As a young man, he worked as an
            art dealer, often traveling, but became depressed after he was
            transferred to London.
          </p>
          <p>
            He turned to religion and spent time as a Protestant missionary in
            southern Belgium. He drifted in ill health and solitude before
            taking up painting in 1881, having moved back home with his parents.
            His younger brother Theo supported him financially; the two kept a
            long correspondence by letter.
          </p>
          <p>
            Born into an upper-middle-class family, Van Gogh drew as a child and
            was serious, quiet, and thoughtful. As a young man, he worked as an
            art dealer, often traveling, but became depressed after he was
            transferred to London.
          </p>
          <p>
            He turned to religion and spent time as a Protestant missionary in
            southern Belgium. He drifted in ill health and solitude before
            taking up painting in 1881, having moved back home with his parents.
            His younger brother Theo supported him financially; the two kept a
            long correspondence by letter.
          </p>
          <p>
            Born into an upper-middle-class family, Van Gogh drew as a child and
            was serious, quiet, and thoughtful. As a young man, he worked as an
            art dealer, often traveling, but became depressed after he was
            transferred to London.
          </p>
          <p>
            He turned to religion and spent time as a Protestant missionary in
            southern Belgium. He drifted in ill health and solitude before
            taking up painting in 1881, having moved back home with his parents.
            His younger brother Theo supported him financially; the two kept a
            long correspondence by letter.
          </p>
        </div>
      </SimpleBar>
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <button>Add to Favorites</button>
      <button>Artist Wiki</button>
    </div>
  );
}
