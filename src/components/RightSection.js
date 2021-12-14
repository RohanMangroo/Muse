import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import images from '../resources/images';
import '../styles/homepage-right.css';

export default function RightSection() {
  return (
    <>
      {images.map((image) => {
        return (
          <figure key={uuidv4()}>
            <img className="opacity-low" src={image} alt="test"></img>
          </figure>
        );
      })}
    </>
  );
}
