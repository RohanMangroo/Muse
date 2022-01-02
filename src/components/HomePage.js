import React from 'react';
import '../styles/homepage.css';
import Main from '../components/Main';

export default function HomePage({ openModal }) {
  return (
    <>
      <div className="homepage">
        <Main />
      </div>
    </>
  );
}
