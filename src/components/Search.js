import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import magGlass from '../resources/Icon.svg';
import { dropDownInfo } from '../utils';
import '../styles/search.css';
import '../styles/search-results.css';

export default function Search() {
  return (
    <div className="search flex-row">
      <section className="results">
        <div></div>
        <div className="related-results">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="search-container flex-col">
        <header className="center-item">
          <h2>Search</h2>
        </header>
        <div className="mueseum-dropdown flex-col center-item">
          <DropDownMenu info={dropDownInfo.museum} value="museum" />
        </div>
        <SearchSubContainer />
      </section>
    </div>
  );
}

function SearchBar({ name, currentInput }) {
  const [search, setSearch] = useState('');
  const isDisabled = currentInput === name ? false : true;

  return (
    <form className="search-bar center-item">
      <div className="flex-row">
        <input
          disabled={isDisabled}
          placeholder="Search by Artist Name"
          type="text"
          value={search}
          name={name}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <span className="center-item">
          <img src={magGlass} alt="mag"></img>
        </span>
      </div>
    </form>
  );
}

function DropDownMenu({ info, name, currentInput }) {
  const isDisabled = currentInput === name ? false : true;

  return (
    <div className="custom-select center-item">
      <div>
        <select disabled={isDisabled} name={name}>
          {info.map((info) => (
            <option key={uuidv4()}>{info}</option>
          ))}
        </select>
        <span className="custom-arrow-container center-item">
          <div className="custom-arrow"></div>
        </span>
      </div>
    </div>
  );
}

function SearchSubContainer() {
  const [currentInput, setCurrentInput] = useState('search');

  function handleClick(e) {
    const name = e.target.name ? e.target.name : currentInput;
    setCurrentInput(name);
  }

  return (
    <div className="secondary-menus flex-col" onClick={(e) => handleClick(e)}>
      <header className="center-item">Search By</header>
      <SearchBar name="search" currentInput={currentInput} />
      <DropDownMenu
        info={dropDownInfo.genre}
        name="genre"
        currentInput={currentInput}
      />
      <DropDownMenu
        info={dropDownInfo.type}
        name="type"
        currentInput={currentInput}
      />
      <DropDownMenu
        info={dropDownInfo.century}
        name="century"
        currentInput={currentInput}
      />
      <DropDownMenu
        info={dropDownInfo.medium}
        name="medium"
        currentInput={currentInput}
      />
    </div>
  );
}
