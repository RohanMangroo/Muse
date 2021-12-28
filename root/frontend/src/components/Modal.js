import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateModal } from '../store/modalReducer';
import { v4 as uuidv4 } from 'uuid';
import { defaultSearch } from '../utils';

function Modal({ artistID, updateModal_ }) {
  const [artworks, setArtworks] = useState(defaultSearch);

  useEffect(() => {
    async function getArtworks() {
      const artworks = await Axios.get(`/api/${artistID}/0`);
      setArtworks(artworks.data);
    }

    getArtworks();
  }, [artistID]);

  function handleClick() {
    updateModal_(false);
  }

  const imageLink = `https://www.artic.edu/iiif/2/${artworks[0].imageid}/full/843,/0/default.jpg`;

  return (
    <div className="model-container center-item">
      <div className="model flex-row">
        <section className="left flex-col">
          <div
            className="current-image"
            style={{ backgroundImage: `url(${imageLink})` }}
          ></div>
          <div className="image-info flex-col">
            <h1>Dog stealing a workman's meal from a snow Daruma</h1>
            <h3>Utagawa Hiroshige</h3>
          </div>
        </section>
        <section className="right flex-col">
          <div className="images-grid">{produceDivs()}</div>
        </section>
        <button onClick={() => handleClick()} className="center-item">
          X
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ artistID }) => {
  return {
    artistID: artistID.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal_: (boolean) => {
      return dispatch(updateModal(boolean));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

function produceDivs() {
  const array = [];
  for (let i = 0; i < 20; i++) {
    array.push(<div className="image-div" key={uuidv4()}></div>);
  }
  return array;
}
