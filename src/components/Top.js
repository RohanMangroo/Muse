import React, { useState, useEffect } from 'react';
import RandomImages from './RandomImages';
import TopLeft from './TopLeft';
import Axios from 'axios';
import '../styles/main-top.css';

export default function Top() {
  return (
    <div className="top flex-row">
      <TopLeft />
      <TopRight />
    </div>
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
  }

  return (
    <section className="top-right flex-col">
      <div className="random-art flex-col">
        <header onClick={() => handleClick()} className="center-item">
          <h2>Random Art</h2>
        </header>
        <section>
          <RandomImages images={result} />
        </section>
      </div>
    </section>
  );
}
