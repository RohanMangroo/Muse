import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import { defaultSearch, artistsInDatabase } from '../utils';
import '../styles/search.css';
import '../styles/search-results.css';

export default function Search() {
  const [currentArtist, setCurrentArtist] = useState(defaultSearch);

  const imageLink = `https://www.artic.edu/iiif/2/${currentArtist[0].imageid}/full/843,/0/default.jpg`;
  return (
    <div className="search flex-row">
      <section className="results">
        <div style={{ backgroundImage: `url(${imageLink})` }}>
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

function FilterSearch({ name, setArtist }) {
  const [filter, setFilter] = useState('');
  const [list, setList] = useState(artistsInDatabase);

  function handleChange(e) {
    setFilter(e.target.value);
    setList(
      artistsInDatabase.filter((obj) =>
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
            // onChange={(e) => setFilter(e.target.value)}
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
    <div
      className="list-of-artist-container flex-col"
      onClick={(e) => handleClick(e)}
    >
      {currentList.map((artist) => (
        <button className="individual-artist" key={uuidv4()} value={artist.id}>
          {artist.artist_name}
        </button>
      ))}
    </div>
  );
}
/**=================================================== */
// function SearchBar({ name, func }) {
//   const [search, setSearch] = useState('');

//   async function handleClick() {
//     if (search === '') return;
//     const artistName = search
//       .split(' ')
//       .map((word) => {
//         const arrayOfLetters = word.split('');
//         arrayOfLetters[0] = arrayOfLetters[0].toUpperCase();
//         return arrayOfLetters.join('');
//       })
//       .join(' ');
//     const artist = await Axios.get(`/api/${artistName}`);
//     func(artist.data);
//   }

//   return (
//     <>
//       <form className="search-bar center-item">
//         <div className="flex-row">
//           <input
//             placeholder="Search by Artist Name"
//             type="text"
//             value={search}
//             name={name}
//             onChange={(e) => setSearch(e.target.value)}
//           ></input>
//           <span className="center-item">
//             <img src={magGlass} alt="mag"></img>
//           </span>
//         </div>
//       </form>
//       <div
//         className="search-bar-btn center-item "
//         onClick={() => handleClick()}
//       >
//         Search
//       </div>
//     </>
//   );
// }

// function DropDownMenu({ info, name, currentInput }) {
//   const isDisabled = currentInput === name ? false : true;

//   return (
//     <div className="custom-select center-item">
//       <div>
//         <select disabled={isDisabled} name={name}>
//           {info.map((info) => (
//             <option key={uuidv4()}>{info}</option>
//           ))}
//         </select>
//         <span className="custom-arrow-container center-item">
//           <div className="custom-arrow"></div>
//         </span>
//       </div>
//     </div>
//   );
// }

// function SearchSubContainer() {
//   const [currentInput, setCurrentInput] = useState('search');

//   function handleClick(e) {
//     console.log(currentInput);
//     const name = e.target.name ? e.target.name : currentInput;
//     setCurrentInput(name);
//   }

//   return (
//     <div className="secondary-menus flex-col" onClick={(e) => handleClick(e)}>
//       <header className="center-item">Search By</header>

//       <DropDownMenu
//         info={dropDownInfo.genre}
//         name="genre"
//         currentInput={currentInput}
//       />
//       <DropDownMenu
//         info={dropDownInfo.type}
//         name="type"
//         currentInput={currentInput}
//       />
//       <DropDownMenu
//         info={dropDownInfo.century}
//         name="century"
//         currentInput={currentInput}
//       />
//       <DropDownMenu
//         info={dropDownInfo.medium}
//         name="medium"
//         currentInput={currentInput}
//       />
//       <div className="search-button center-item">Search</div>
//     </div>
//   );
// }
