import React from 'react';
import { connect } from 'react-redux';

function CurrentImage({ artwork }) {
  const background = artwork
    ? `url(https://www.artic.edu/iiif/2/${artwork.imageid}/full/843,/0/default.jpg)`
    : '';

  return (
    <div
      className="current-image"
      style={{ backgroundImage: background }}
    ></div>
  );
}

const mapStateToProps = ({ mainImage }) => {
  return {
    artwork: mainImage.artwork,
  };
};

export default connect(mapStateToProps, null)(CurrentImage);
