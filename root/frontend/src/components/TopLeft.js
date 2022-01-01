import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateModal } from '../store/modalReducer';
import { updateCurrentArtistID } from '../store/currentArtistIDReducer';
import { updateCurrentMainImage } from '../store/currentMainImageReducer';
import Axios from 'axios';

function TopLeft({
  updateModal_,
  updateCurrentArtistID_,
  updateCurrentMainImage_,
}) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function getFeaturedArtists(idOne, idTwo) {
      const featureOne = await Axios.get(`/api/${idOne}`);
      const featureTwo = await Axios.get(`/api/${idTwo}`);

      setFeatured([featureOne.data[0], featureTwo.data[0]]);
    }
    getFeaturedArtists(6267, 3228);
  }, []);

  function handleClick(img) {
    updateModal_(true);
    updateCurrentArtistID_(img.artistid);
    updateCurrentMainImage_(img);
  }

  const displayOne = featured.length ? featured[0].artist_name : '';
  const displayTwo = featured.length ? featured[1].artist_name : '';
  const imageOne = featured.length
    ? `https://www.artic.edu/iiif/2/${featured[0].imageid}/full/400,/0/default.jpg`
    : '';
  const imageTwo = featured.length
    ? `https://www.artic.edu/iiif/2/${featured[1].imageid}/full/400,/0/default.jpg`
    : '';

  return (
    <section className="top-left flex-col">
      <div className="featured-artist-container flex-col">
        <header className="center-item">
          <h2>Featured Artists</h2>
        </header>
        <div className="sub-container flex-row">
          <div
            className="featured-artist flex-col"
            style={{
              backgroundImage: `url(${imageOne})`,
            }}
            onClick={() => handleClick(featured[0])}
          >
            <div className="featured-artist-description">
              <h2>{displayOne}</h2>
            </div>
          </div>
          <div
            className="featured-artist flex-col"
            style={{
              backgroundImage: `url(${imageTwo})`,
            }}
            onClick={() => handleClick(featured[1])}
          >
            <div className="featured-artist-description">
              <h2>{displayTwo}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal_: (boolean) => {
      return dispatch(updateModal(boolean));
    },
    updateCurrentArtistID_: (id) => {
      return dispatch(updateCurrentArtistID(id));
    },
    updateCurrentMainImage_: (artwork) => {
      return dispatch(updateCurrentMainImage(artwork));
    },
  };
};

export default connect(null, mapDispatchToProps)(TopLeft);
