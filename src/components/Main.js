import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/main-top.css';
import '../styles/search.css';
import '../styles/gallery.css';

/*Main Component*/
export default function Main() {
  return (
    <main className="main-container flex-col">
      <Top />
      <Search />
      <Gallery />
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
        <header></header>
        <div className="sub-container flex-row">
          <div className="featured-artist flex-col">
            <div className="featured-artist-img"></div>
            <div className="featured-artist-description"></div>
          </div>
          <div className="featured-artist flex-col">
            <div className="featured-artist-img"></div>
            <div className="featured-artist-description"></div>
          </div>
        </div>
        <div className="unknown-section"></div>
      </div>
    </section>
  );
}

function TopRight() {
  return (
    <section className="top-right flex-col">
      <div className="random-art flex-col">
        <header></header>
        <section>{createSection()}</section>
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
      <section className="search-form">
        <div></div>
      </section>
    </div>
  );
}

function Gallery() {
  return <div className="gallery"></div>;
}

/*Util Function*/
function createSection() {
  const array = [];
  for (let i = 0; i < 9; i++) {
    array.push(
      <div className="flex-col" key={uuidv4()}>
        <div></div>
        <div></div>
      </div>
    );
  }
  return array;
}
