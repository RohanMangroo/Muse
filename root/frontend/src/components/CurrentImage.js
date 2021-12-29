import React from 'react';
import { connect } from 'react-redux';

function CurrentImage({ artwork }) {
  const background = artwork
    ? `url(https://www.artic.edu/iiif/2/${artwork.imageid}/full/843,/0/default.jpg)`
    : '';
  const title = artwork ? artwork.title : 'Title? What title?';
  const artistName = artwork ? artwork.artist_name : 'Name you say?';
  return (
    <>
      <div
        className="current-image"
        style={{ backgroundImage: background }}
      ></div>
      <div className="current-image-info">
        <h3>{title}</h3>
        <h4>{artistName}</h4>
      </div>
    </>
  );
}

const mapStateToProps = ({ mainImage }) => {
  return {
    artwork: mainImage.artwork,
  };
};

export default connect(mapStateToProps, null)(CurrentImage);
