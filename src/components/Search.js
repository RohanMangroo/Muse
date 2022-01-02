import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import { connect } from 'react-redux';
import { defaultSearch } from '../utils';
import { updateModal } from '../store/modalReducer';
import { updateCurrentArtistID } from '../store/currentArtistIDReducer';
import { updateCurrentMainImage } from '../store/currentMainImageReducer';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../styles/search.css';
import '../styles/search-results.css';

function Search({
  updateModal_,
  updateCurrentArtistID_,
  updateCurrentMainImage_,
}) {
  const [currentArtist, setCurrentArtist] = useState(defaultSearch);

  function handleClick(artwork) {
    updateCurrentArtistID_(artwork.artistid);
    updateCurrentMainImage_(artwork);
    updateModal_(true);
  }

  const imageLink = `https://www.artic.edu/iiif/2/${currentArtist[0].imageid}/full/843,/0/default.jpg`;
  return (
    <div className="search flex-row">
      <section className="results">
        <div
          style={{ backgroundImage: `url(${imageLink})` }}
          onClick={() => handleClick(currentArtist[0])}
        >
          <div className="results-info">
            <h1>{currentArtist[0].artist_name}</h1>
            <h2></h2>
            <h2>{currentArtist[0].origin}</h2>
          </div>
        </div>
        <div className="related-results">
          {currentArtist.map((artwork, index) => {
            const imageLink = `https://www.artic.edu/iiif/2/${artwork.imageid}/full/843,/0/default.jpg`;
            return index > 0 ? (
              <div
                style={{ backgroundImage: `url(${imageLink})` }}
                key={uuidv4()}
                onClick={() => handleClick(artwork)}
              >
                <div></div>
              </div>
            ) : (
              <React.Fragment key={uuidv4()}></React.Fragment>
            );
          })}
        </div>
      </section>
      <section className="search-container flex-col">
        <header className="center-item">
          <h2>Search</h2>
        </header>
        <FilterSearch setArtist={setCurrentArtist} />
      </section>
    </div>
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

export default connect(null, mapDispatchToProps)(Search);

function FilterSearch({ name, setArtist }) {
  const [filter, setFilter] = useState('');
  const [staticList, setStaticList] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getArtists() {
      const listOfArtists = await Axios.get('api/artists');
      setList(listOfArtists.data);
      setStaticList(listOfArtists.data);
    }

    getArtists();
  }, []);

  function handleChange(e) {
    setFilter(e.target.value);
    setList(
      staticList.filter((obj) =>
        obj.artist_name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  return (
    <>
      <form className="search-bar center-item">
        <div className="flex-row">
          <input
            placeholder="Search Name"
            type="text"
            value={filter}
            name={name}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
      </form>
      <ListOfArtists currentList={list} setArtist={setArtist} />
    </>
  );
}

function ListOfArtists({ currentList, setArtist }) {
  async function handleClick(e) {
    const artist = await Axios.get(`/api/${e.target.value}/4`);
    setArtist(artist.data);
  }

  return (
    <SimpleBar className="list-of-artist-container flex-col">
      <div onClick={(e) => handleClick(e)}>
        {currentList.map((artist) => (
          <button
            className="individual-artist"
            key={uuidv4()}
            value={artist.id}
          >
            {artist.artist_name}
          </button>
        ))}
      </div>
    </SimpleBar>
  );
}
