import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateCurrentMainImage } from '../store/currentMainImageReducer';

function GridImages({ artworks, position, updateCurrentMainImage_ }) {
  const [currentGridImages, setCurrenGridImages] = useState([]);

  useEffect(() => {
    if (artworks.length) {
      const newImages = addImagesToGrid(artworks, position);
      setCurrenGridImages((prev) => [...prev, ...newImages]);
    }
  }, [artworks, position]);

  function handleClick(artwork) {
    updateCurrentMainImage_(artwork);
  }

  return currentGridImages.map((artwork) => {
    const background = artwork
      ? `url(https://www.artic.edu/iiif/2/${artwork.imageid}/full/843,/0/default.jpg)`
      : '';

    return (
      <div
        style={{ backgroundImage: background }}
        className="image-div"
        key={uuidv4()}
        onClick={() => handleClick(artwork)}
      ></div>
    );
  });
}

const mapStateToProps = ({ currentPosition }) => {
  return {
    position: currentPosition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentMainImage_: (artwork) => {
      return dispatch(updateCurrentMainImage(artwork));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridImages);

function addImagesToGrid(artworks, position) {
  const start = position - 10;
  const stop = position;
  const array = [];
  for (let i = start; i < stop; i++) {
    array.push(artworks[i]);
  }

  return array;
}
