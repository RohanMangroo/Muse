import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateModal } from '../store/modalReducer';
import CurrentImage from './CurrentImage';
import GridImages from './GridImages';

function Modal({ artistID, updateModal_ }) {
  const [artworks, setArtworks] = useState([]);

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

  return (
    <div className="model-container center-item">
      <div className="model flex-row">
        <section className="left flex-col">
          <CurrentImage />
          <div className="image-info flex-col">
            <h1>Dog stealing a workman's meal from a snow Daruma</h1>
            <h3>Utagawa Hiroshige</h3>
          </div>
        </section>
        <section className="right flex-col">
          <div className="images-grid">
            <GridImages artworks={artworks} />
          </div>
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
