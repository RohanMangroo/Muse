import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { featuredArtistDescriptions } from '../utils';
import { v4 as uuidv4 } from 'uuid';
import '../styles/main-top.css';

import Axios from 'axios';

export default function Top() {
  return (
    <div className="top flex-row">
      <TopLeft />
      <TopRight />
    </div>
  );
}

function TopLeft() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/singleArtist');
  }

  return (
    <section className="top-left flex-col">
      <div className="featured-artist-container flex-col">
        <header className="center-item">
          <h2>Featured Artists</h2>
        </header>
        <div className="sub-container flex-row">
          <div
            className="featured-artist flex-col"
            onClick={() => handleClick()}
          >
            <div className="featured-artist-description">
              <h2>Michelangelo</h2>
              <h3>1475-1564</h3>
              <h3>Italian</h3>
              <p>{featuredArtistDescriptions.artistOne.p1}</p>
            </div>
          </div>
          <div className="featured-artist flex-col">
            <div
              className="featured-artist-description"
              onClick={() => handleClick()}
            >
              <h2>Pablo Picasso</h2>
              <h3>1881-1973</h3>
              <h3>Spanish</h3>
              <p>{featuredArtistDescriptions.artistTwo.p1}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopRight() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const images = await Axios.get('/api/randomArtists');
      setResult(images.data);
    }

    fetchData();
  }, []);

  async function handleClick() {
    const images = await Axios.get('/api/randomArtists');
    setResult(images.data);
    console.log(result);
  }

  return (
    <section className="top-right flex-col">
      <div className="random-art flex-col">
        <header className="center-item">
          <h2>Random Art</h2>
          <button onClick={() => handleClick()}></button>
        </header>
        {/* <section>{createSection(9, 2, 'random-art-card flex-col')}</section> */}
        <section>
          <RandomImages images={result} />
        </section>
      </div>
    </section>
  );
}

function RandomImages({ images }) {
  return images.map((img) => {
    return (
      <div
        style={{
          backgroundImage: `url(https://www.artic.edu/iiif/2/${img.imageid}/full/200,/0/default.jpg)`,
        }}
        className="random-art-card flex-col"
        key={uuidv4()}
      >
        <div></div>
        <div className="center-item">
          <h3>{img.artist_name.split(' ')[1]}</h3>
        </div>
      </div>
    );
  });
}
