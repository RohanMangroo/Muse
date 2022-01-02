import React from 'react';
import { connect } from 'react-redux';

function CurrentImage({ artwork }) {
  const background = artwork
    ? `url(https://www.artic.edu/iiif/2/${artwork.imageid}/full/843,/0/default.jpg)`
    : '';
  const title = artwork ? artwork.title : 'Title? What title?';
  const display = artwork ? artwork.artist_display : 'Name you say?';
  const medium = artwork ? artwork.medium_display : 'My bare hands!';
  const date = artwork ? artwork.date_display : 'Somewhere in time...?';
  return (
    <>
      <div
        className="current-image"
        style={{ backgroundImage: background }}
      ></div>
      <div className="current-image-info">
        <h3>{`${title}, ${date}`}</h3>
        <h4>{display}</h4>
        <h5>{medium}</h5>
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
