import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import Top from './Top';
import '../styles/gallery.css';
import '../styles/model.css';
import { v4 as uuidv4 } from 'uuid';
import { gallery } from '../utils';

/*Main Component*/
function Main() {
  return (
    <>
      <main className="main-container flex-col">
        <Top />
        <Search />
        <Gallery />
      </main>
    </>
  );
}

const mapStateToProps = ({ model }) => {
  return {
    openModel: model,
  };
};

export default connect(mapStateToProps, null)(Main);

function Gallery() {
  return (
    <div style={{ overflow: 'auto' }}>
      <div className="gallery">
        {gallery.map((obj) => {
          return (
            <div
              className="grid-cell"
              style={{ backgroundImage: `url(${obj.img})` }}
              key={uuidv4()}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
