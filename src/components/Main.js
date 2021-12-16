import React, { useState } from 'react';
import { createSection } from '../utils';
import { randomArtImages } from '../utils';
import { v4 as uuidv4 } from 'uuid';
import '../styles/main-top.css';
import '../styles/search.css';
import '../styles/gallery.css';
import '../styles/about.css';
import magGlass from '../resources/Icon.svg';
/*Main Component*/
export default function Main() {
  return (
    <main className="main-container flex-col">
      <Top />
      <Search />
      <Gallery />
      <About />
    </main>
  );
}

/*Sub Components*/
function Top() {
  return (
    <div className="top flex-row">
      <TopLeft />
      <TopRight />
    </div>
  );
}

function TopLeft() {
  return (
    <section className="top-left flex-col">
      <div className="featured-artist-container flex-col">
        <header className="center-item">
          <h2>Featured Artists</h2>
        </header>
        <div className="sub-container flex-row">
          <div className="featured-artist flex-col">
            <div className="featured-artist-description">
              <h2>Michelangelo</h2>
              <h3>1475-1564</h3>
              <h3>Italian</h3>
            </div>
          </div>
          <div className="featured-artist flex-col">
            <div className="featured-artist-description">
              <h2>Pablo Picasso</h2>
              <h3>1881-1973</h3>
              <h3>Spanish</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopRight() {
  return (
    <section className="top-right flex-col">
      <div className="random-art flex-col">
        <header className="center-item">
          <h2>Random Art</h2>
        </header>
        {/* <section>{createSection(9, 2, 'random-art-card flex-col')}</section> */}
        <section>
          {randomArtImages.map((obj) => {
            return (
              <div
                style={{ backgroundImage: `url(${obj.img})` }}
                className="random-art-card flex-col"
                key={uuidv4()}
              >
                <div></div>
                <div className="center-item">
                  <h3>{obj.artist}</h3>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}

function Search() {
  return (
    <div className="search flex-row">
      <section className="results">
        <div></div>
        <div className="related-results">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="search-container flex-col">
        <header className="center-item">
          <h2>Search</h2>
        </header>
        <div className="flex-col">
          <SearchBar />
        </div>
      </section>
    </div>
  );
}

function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <form className="search-bar">
      <div className="flex-row">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <span className="center-item">
          <img src={magGlass} alt="mag"></img>
        </span>
      </div>
    </form>
  );
}

function Gallery() {
  return <div className="gallery">{createSection(14, 0, 'grid-cell')}</div>;
}

function About() {
  return <div className="about"></div>;
}
