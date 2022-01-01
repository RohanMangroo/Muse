import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateModal } from '../store/modalReducer';
import { updatePosition } from '../store/onScrollReducer';
import CurrentImage from './CurrentImage';
import GridImages from './GridImages';
import '../styles/model.css';

function Modal({ artistID, updateModal_, updatePosition_, position }) {
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
    updatePosition_({ start: 0, stop: 10 });
  }

  function handleScroll(e) {
    const { start, stop } = position;
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (position === artworks.length) return;
    else if (scrollHeight - scrollTop <= clientHeight + 100) {
      const newPosition = stop + 10;
      newPosition >= artworks.length
        ? updatePosition_({ start: stop, stop: artworks.length })
        : updatePosition_({ start: stop, stop: start + 10 });
    }
  }

  return (
    <div className="model-container center-item">
      <div className="model flex-row">
        <section className="left flex-col">
          <CurrentImage />
          <div className="image-info flex-col"></div>
        </section>

        <section className="right">
          <div className="images-grid" onScroll={(e) => handleScroll(e)}>
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

const mapStateToProps = ({ artistID, currentPosition }) => {
  return {
    artistID: artistID.id,
    position: currentPosition,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal_: (boolean) => {
      return dispatch(updateModal(boolean));
    },
    updatePosition_: (newPosition) => {
      return dispatch(updatePosition(newPosition));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
