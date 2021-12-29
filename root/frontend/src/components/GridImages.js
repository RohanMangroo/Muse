import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateCurrentMainImage } from '../store/currentMainImageReducer';

function GridImages({ artworks, updateCurrentMainImage_ }) {
  function handleClick(artwork) {
    updateCurrentMainImage_(artwork);
  }

  return artworks.map((artwork, index) => {
    if (index < 8) {
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
    }
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentMainImage_: (artwork) => {
      return dispatch(updateCurrentMainImage(artwork));
    },
  };
};

export default connect(null, mapDispatchToProps)(GridImages);
